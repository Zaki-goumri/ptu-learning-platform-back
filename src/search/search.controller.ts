// src/search/search.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SearchService } from './search.service';
import { SearchQueryDto } from './dto/search-query.dto';
import { SearchResponseDto } from './dto/search-query.dto';
import { UserSearchDto } from './dto/user-search.dto';

@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('users')
  @ApiOperation({ summary: 'Search users' })
  @ApiResponse({
    status: 200,
    description: 'Search results',
    type: SearchResponseDto<UserSearchDto>,
  })
  async searchUsers(
    @Query() searchQuery: SearchQueryDto,
  ): Promise<SearchResponseDto<UserSearchDto>> {
    return await this.searchService.searchUsers(
      searchQuery.query,
      searchQuery.page,
      searchQuery.limit,
    );
  }

  @Get('health')
  @ApiOperation({ summary: 'Check Elasticsearch health' })
  async healthCheck(): Promise<{ status: string; elasticsearch: boolean }> {
    const isHealthy = await this.searchService.healthCheck();
    return {
      status: isHealthy ? 'healthy' : 'unhealthy',
      elasticsearch: isHealthy,
    };
  }
}
