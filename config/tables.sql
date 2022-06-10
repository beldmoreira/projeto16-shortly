CREATE TABLE "public.url" (
	"id" serial NOT NULL,
	"createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT 'NOW()',
	"userId" integer NOT NULL,
	"shortUrl" TEXT NOT NULL UNIQUE,
	"views" integer NOT NULL DEFAULT '0',
	"url" TEXT NOT NULL,
	CONSTRAINT "url_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.user" (
	"id" serial NOT NULL,
	"email" serial NOT NULL,
	"password" serial NOT NULL UNIQUE,
	"name" serial NOT NULL,
	"createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT 'NOW()',
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.sessions" (
	"id" serial NOT NULL,
	"createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT 'NOW()',
	"userId" integer NOT NULL,
	"token" TEXT NOT NULL UNIQUE,
	CONSTRAINT "sessions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);