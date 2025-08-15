import {
  CreateUserDto,
  LoginDto,
  UserResponseDto
} from './entities/dtos/user.dtos'

interface UserService {
  findByUsernameAndPassword(user: LoginDto): Promise<UserResponseDto>
  createStudent(user: CreateUserDto): Promise<UserResponseDto>
}

export { UserService }
