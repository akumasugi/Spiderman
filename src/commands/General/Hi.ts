/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "hi",
			description: "Generally used to check if bot is Up",
			category: "general",
			usage: `${client.config.prefix}hi`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const miles =
			"https://tenor.com/view/miles-morales-gif-18761274";
		return void this.client.sendMessage(
			M.from,
			{ url: miles },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `Yo! WhatsUp! 🕷️I'm Miles Morales🕷️ Use something from *${this.client.config.prefix}help* \n`,
			}
		);
	};
}
