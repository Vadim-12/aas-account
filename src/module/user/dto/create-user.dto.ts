import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Идентификатор пользователя (генерируется автоматически)',
    required: false,
    type: String,
  })
  @Expose()
  @IsString()
  @IsOptional()
  userId?: string;

  @ApiProperty({
    description: 'Логин пользователя',
    required: true,
    type: String,
  })
  @Expose()
  @IsString()
  login: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    required: true,
    type: String,
  })
  @Expose()
  @IsString()
  password: string;

  @ApiProperty({
    description: 'Телефон пользователя',
    required: true,
    type: String,
  })
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'Имя пользователя',
    required: true,
    type: String,
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'Фамилия пользователя',
    required: true,
    type: String,
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'Отчество пользователя',
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  middleName?: string;

  @ApiProperty({
    description: 'Email пользователя',
    required: true,
    type: String,
  })
  @IsEmail()
  email: string;
}
