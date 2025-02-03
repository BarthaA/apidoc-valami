import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhonesService } from './phones.service';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { ApiParam } from '@nestjs/swagger';

@Controller('phones')
export class PhonesController {
  constructor(private readonly phonesService: PhonesService) {}

  /**
   * Create a phone with the dto data
   * 
   * @param createPhoneDto The data to create the phone with
   * @returns JSON Response
   */
  @Post()
  create(@Body() createPhoneDto: CreatePhoneDto) {
    return this.phonesService.create(createPhoneDto);
  }

  /**
   * Get all the phones in the table
   * 
   * @returns JSON Response
   */
  @Get()
  findAll() {
    return this.phonesService.findAll();
  }

  /**
   * Get one phone by the id
   * 
   * @param id The id of the phone to find
   * @returns JSON Response
   */
  @Get(':id')
  @ApiParam({name: 'id', type: 'number', description: 'The id of the phone to find'})
  findOne(@Param('id') id: string) {
    return this.phonesService.findOne(+id);
  }

  /**
   * Modify a phone by id
   * 
   * @param id The id of the phone to update
   * @param updatePhoneDto The data to update the phone with
   * @returns JSON Response
   */
  @Patch(':id')
  @ApiParam({ name: 'id', type: 'number', description: 'The id of the phone to update' })
  update(@Param('id') id: string, @Body() updatePhoneDto: UpdatePhoneDto) {
    return this.phonesService.update(+id, updatePhoneDto);
  }

  /**
   * Delete a phone by id
   * 
   * @param id The id of the phone to delete
   * @returns JSON Response
   */
  @Delete(':id')
  @ApiParam({name: 'id', type: 'number', description: 'The id of the phone to delete'})
  remove(@Param('id') id: string) {
    return this.phonesService.remove(+id);
  }
}
