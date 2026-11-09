import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  email: varchar("email", { length: 160 }),
  zip: varchar("zip", { length: 12 }),
  address: varchar("address", { length: 255 }),
  service: varchar("service", { length: 80 }).notNull(),
  urgency: varchar("urgency", { length: 40 }).notNull().default("flexible"),
  message: text("message"),
  source: varchar("source", { length: 80 }).default("landing-page"),
  contacted: boolean("contacted").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
