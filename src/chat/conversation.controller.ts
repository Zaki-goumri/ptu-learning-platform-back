import { Controller, Post, Body, Get, Query, Param, Patch, Delete, UseGuards, Req } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { CreateConversationDto } from './dtos/conversations/create-conversation.dto';
import { PaginationQueryDto } from 'src/common/dtos/pagination.dto';
import { UpdateConversationDto } from './dtos/conversations/update-conversatio.dto';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AccessTokenGuard } from 'src/auth/guards/access-token.guard'; // Assuming you have a JWT guard
import { User } from 'src/auth/decorators/user.decorator';
import { User as UserEntity } from 'src/user/entities/user.entity';

@ApiTags('Conversations')
@ApiBearerAuth()
@UseGuards(AccessTokenGuard)
@Controller('conversations')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new conversation' })
  @ApiResponse({ status: 201, description: 'The conversation has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createConversationDto: CreateConversationDto, @User() creator:UserEntity) {
    return this.conversationService.create(createConversationDto, creator.id);
  }

  @Get()
  @ApiOperation({ summary: 'Get a paginated list of conversations' })
  @ApiResponse({ status: 200, description: 'Return a list of conversations.' })
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.conversationService.findAll(paginationQuery);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a conversation by ID' })
  @ApiResponse({ status: 200, description: 'Return a single conversation.' })
  @ApiResponse({ status: 404, description: 'Conversation not found.' })
  findOne(@Param('id') id: string) {
    return this.conversationService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a conversation' })
  @ApiResponse({ status: 200, description: 'The conversation has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Conversation not found.' })
  update(@Param('id') id: string, @Body() updateConversationDto: UpdateConversationDto) {
    return this.conversationService.update(id, updateConversationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a conversation' })
  @ApiResponse({ status: 200, description: 'The conversation has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Conversation not found.' })
  remove(@Param('id') id: string) {
    return this.conversationService.remove(id);
  }
}
