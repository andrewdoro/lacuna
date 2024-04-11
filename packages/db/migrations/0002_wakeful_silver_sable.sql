CREATE TABLE `domain` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`parent_id` integer,
	FOREIGN KEY (`parent_id`) REFERENCES `domain`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `domain_reques` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`status` text,
	`description` text,
	`rejected_reason` text
);
--> statement-breakpoint
CREATE TABLE `project` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text,
	`slug` text,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `projectDomain` (
	`projectId` integer,
	`domainId` integer,
	FOREIGN KEY (`projectId`) REFERENCES `project`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`domainId`) REFERENCES `domain`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `projectSkill` (
	`projectId` integer,
	`skillId` integer,
	`ratio` integer,
	FOREIGN KEY (`projectId`) REFERENCES `project`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`skillId`) REFERENCES `skill`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `skill` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`domainId` integer,
	FOREIGN KEY (`domainId`) REFERENCES `domain`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `domain_name_unique` ON `domain` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `skill_name_unique` ON `skill` (`name`);