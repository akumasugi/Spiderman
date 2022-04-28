/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "miles",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}chitoge`,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/eXH06d7J-bwAAAPo/see-ya-yes.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `🐧 *Miles Morales* 🐧\n\n🍀 *Description: A WhatsApp Bot created by PARKER With Rich Anime Features.*\n\n🌐 *URL: https://github.com/ProSpotGamer/Miles-Bot.git* \n\n 📒 *Guide: https://github.com/ProSpotGamer/Miles-Bot.git* \n`,
			}
		);
	};
}
