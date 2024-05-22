CREATE TABLE `vote` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`skill_requst_id` integer,
	`skill_id` integer,
	FOREIGN KEY (`skill_requst_id`) REFERENCES `skill_request`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`skill_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `vote_idx` ON `vote` (`skill_requst_id`,`skill_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `skill_project_unique` ON `projectSkill` (`projectId`,`skillId`);