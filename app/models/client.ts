import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Adress from './adress.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Phone from './phone.js'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare cpf: string

  @hasOne(() => Adress)
  declare adress: HasOne<typeof Adress>

  @hasOne(() => Phone)
  declare phone: HasOne<typeof Phone>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
