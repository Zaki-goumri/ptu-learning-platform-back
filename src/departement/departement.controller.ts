import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { DepartementService } from './departement.service';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';
import { AccessTokenGuard } from '../auth/guards/access-token.guard';
import { RoleGuard } from '../auth/guards/role.guard';
import { Roles } from '../auth/decorators/role.decorator';
import { USER_ROLES } from '../user/types/user-role.type';
import {
  ApiOperation,
  ApiResponse,
  ApiOkResponse,
  ApiTooManyRequestsResponse,
  ApiInternalServerErrorResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { PaginationQueryDto } from 'src/common/dtos/pagination.dto';
import { SWAGGER_DESC } from 'src/common/constants/swagger.constants';

@Controller('departement')
@ApiTooManyRequestsResponse({ description: SWAGGER_DESC.TOO_MANY_REQUESTS })
@ApiInternalServerErrorResponse({
  description: SWAGGER_DESC.INTERNAL_SERVER_ERROR,
})
export class DepartementController {
  constructor(private readonly departementService: DepartementService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @UseGuards(AccessTokenGuard, RoleGuard)
  @Roles(USER_ROLES.ADMIN)
  @ApiOperation({ summary: 'Create a new department' })
  @ApiResponse({ status: 201, description: 'Department created successfully' })
  async create(@Body() createDepartementDto: CreateDepartementDto) {
    return await this.departementService.create(createDepartementDto);
  }

  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  @Get()
  @UseGuards(AccessTokenGuard)
  @ApiOperation({ summary: 'Get all departments with pagination' })
  @ApiOkResponse({ description: 'Return paginated departments' })
  async findAll(@Query() { page, limit }: PaginationQueryDto) {
    return await this.departementService.findwWithPagination({ page, limit });
  }

  @Get(':id')
  @UseGuards(AccessTokenGuard)
  @ApiOperation({ summary: 'Get department by id' })
  @ApiOkResponse({ description: 'Return department by id' })
  async findOne(@Param('id') id: string) {
    return await this.departementService.findById(id);
  }

  @Patch(':id')
  @UseGuards(AccessTokenGuard, RoleGuard)
  @Roles(USER_ROLES.ADMIN)
  @ApiOperation({ summary: 'Update department by id' })
  @ApiResponse({ status: 200, description: 'Department updated successfully' })
  async update(
    @Param('id') id: string,
    @Body() updateDepartementDto: UpdateDepartementDto,
  ) {
    return await this.departementService.update(id, updateDepartementDto);
  }

  @Delete(':id')
  @UseGuards(AccessTokenGuard, RoleGuard)
  @Roles(USER_ROLES.ADMIN)
  @ApiOperation({ summary: 'Delete department by id' })
  @ApiResponse({ status: 200, description: 'Department deleted successfully' })
  async remove(@Param('id') id: string) {
    return await this.departementService.delete(id);
  }
}
