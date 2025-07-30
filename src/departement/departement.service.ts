import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './entities/departement.entity';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';
import { PaginationQueryDto } from './dto/pagination-query.dto';
import { RedisService } from '../redis/redis.service';
import { PaginatedResponseDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class DepartementService {
  private static readonly CACHE_PREFIX = 'department';
  private static readonly LIST_CACHE_PREFIX = 'departments';

  private static getDepartmentCacheKey(id: number): string {
    return `${DepartementService.CACHE_PREFIX}:${id}`;
  }

  private static getDepartmentsListCacheKey(
    page: number,
    limit: number,
  ): string {
    return `${DepartementService.LIST_CACHE_PREFIX}:page:${page}:limit:${limit}`;
  }

  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    private readonly redisService: RedisService,
  ) {}

  async create(
    createDepartementDto: CreateDepartementDto,
  ): Promise<Department> {
    const department = this.departmentRepository.create(createDepartementDto);
    return await this.departmentRepository.save(department);
  }

  async findwWithPagination({
    page = 1,
    limit = 10,
  }: PaginationQueryDto): Promise<PaginatedResponseDto<Department>> {
    const cacheKey = DepartementService.getDepartmentsListCacheKey(page, limit);

    const cachedData =
      await this.redisService.get<PaginatedResponseDto<Department>>(cacheKey);
    if (cachedData) {
      return cachedData;
    }

    const skip = (page - 1) * limit;
    const [departments, total] = await this.departmentRepository.findAndCount({
      skip,
      take: limit,
    });

    const result = {
      data: departments,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };

    await this.redisService.set(cacheKey, result);
    return result;
  }

  async findById(id: number): Promise<Department> {
    const cacheKey = DepartementService.getDepartmentCacheKey(id);
    const cachedData = await this.redisService.get<Department>(cacheKey);

    if (cachedData) return cachedData;

    const department = await this.departmentRepository.findOne({
      where: { id },
    });
    if (!department)
      throw new NotFoundException(`Department with ID ${id} not found`);

    await this.redisService.set(cacheKey, department);
    return department;
  }

  async update(
    id: number,
    updateDepartementDto: UpdateDepartementDto,
  ): Promise<Department> {
    return await this.departmentRepository.save({
      ...updateDepartementDto,
      id,
    });
  }

  async delete(id: number): Promise<void> {
    const deletedDepartements = await this.departmentRepository.delete(id);
    if (deletedDepartements)
      throw new NotFoundException('department not found');
  }
}
