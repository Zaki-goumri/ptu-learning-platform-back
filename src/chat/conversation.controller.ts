import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { CreateConversationDto } from './dtos/conversations/create-conversation.dto';
import { PaginationQueryDto } from 'src/common/dtos/pagination.dto';
import { UpdateConversationDto } from './dtos/conversations/update-conversatio.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTooManyRequestsResponse,
  ApiInternalServerErrorResponse,
  ApiUnauthorizedResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { AccessTokenGuard } from 'src/auth/guards/access-token.guard';
import { User } from 'src/auth/decorators/user.decorator';
import { User as UserEntity } from 'src/user/entities/user.entity';
import { SWAGGER_DESC } from 'src/common/constants/swagger.constants';

@ApiTooManyRequestsResponse({ description: SWAGGER_DESC.TOO_MANY_REQUESTS })
@ApiInternalServerErrorResponse({
  description: SWAGGER_DESC.INTERNAL_SERVER_ERROR,
})
@ApiUnauthorizedResponse({
  description: 'Unauthorized user or Unauthorized role to do this action ',
})
@ApiBearerAuth()
@UseGuards(AccessTokenGuard)
@Controller('conversations')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new conversation' })
  @ApiCreatedResponse({
    description: 'The conversation has been successfully created.',
  })
  @ApiBadRequestResponse({ description: 'Bad Request.' })
  create(
    @Body() createConversationDto: CreateConversationDto,
    @User() creator: UserEntity,
  ) {
    return this.conversationService.create(createConversationDto, creator.id);
  }

  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  @Get()
  @ApiOperation({ summary: 'Get a paginated list of conversations' })
  @ApiResponse({ status: 200, description: 'Return a list of conversations.' })
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.conversationService.findAll(paginationQuery);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a conversation by ID' })
  @ApiResponse({ status: 200, description: 'Return a single conversation.' })
  @ApiNotFoundResponse({ description: 'Conversation not found.' })
  findOne(@Param('id') id: string) {
    return this.conversationService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a conversation' })
  @ApiOkResponse({
    description: 'The conversation has been successfully updated.',
  })
  @ApiNotFoundResponse({ description: 'Conversation not found.' })
  update(
    @Param('id') id: string,
    @Body() updateConversationDto: UpdateConversationDto,
  ) {
    return this.conversationService.update(id, updateConversationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a conversation' })
  @ApiOkResponse({
    description: 'The conversation has been successfully deleted.',
  })
  @ApiNotFoundResponse({ description: 'Conversation not found.' })
  remove(@Param('id') id: string) {
    return this.conversationService.remove(id);
  }
}
