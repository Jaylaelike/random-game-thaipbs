// import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// export const users = sqliteTable('users', {
//   id: text('id').primaryKey(),
//   email: text('email').notNull(),
//   name: text('name'),
//   role: text('role', { enum: ['admin', 'user'] }).default('user').notNull(),
//   randomNumber: integer('random_number'),
//   createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
// });

import { pgTable, text, integer, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull(),
  name: text('name'),
  role: text('role', { enum: ['admin', 'user'] }).default('user').notNull(),
  randomNumber: integer('random_number'),
  createdAt: timestamp('created_at').defaultNow(),
});