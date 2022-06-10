CREATE TABLE "urls" (
	"id" serial NOT NULL,
	"createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT 'NOW()',
	"userId" integer NOT NULL,
	"shortUrl" TEXT NOT NULL UNIQUE,
	"views" integer NOT NULL DEFAULT '0',
	"url" TEXT NOT NULL,
	CONSTRAINT "url_pk" PRIMARY KEY ("id")
);



CREATE TABLE "users" (
	"id" serial NOT NULL,
	"email" serial NOT NULL,
	"password" serial NOT NULL UNIQUE,
	"name" serial NOT NULL,
	"createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT 'NOW()',
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
);



CREATE TABLE "sessions" (
	"id" serial NOT NULL,
	"createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT 'NOW()',
	"userId" integer NOT NULL,
	"token" TEXT NOT NULL UNIQUE,
	CONSTRAINT "sessions_pk" PRIMARY KEY ("id")
);