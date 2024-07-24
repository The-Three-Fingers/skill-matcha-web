CREATE TABLE IF NOT EXISTS "profiles" (
	"id" serial NOT NULL,
	"name" text NOT NULL,
	"last_name" text NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DROP TABLE "guestbook";