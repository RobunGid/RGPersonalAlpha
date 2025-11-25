from aiohttp import web

from aiogram import Router
from aiogram.enums.parse_mode import ParseMode

from bot_config import ADMIN_CHAT_IDS, bot, app

router = Router()

async def send_message(request):
    data = await request.json()
    text = data.get("text", "")
    for admin_chat_id in ADMIN_CHAT_IDS:
        await bot.send_message(chat_id=admin_chat_id, text=text, parse_mode=ParseMode.MARKDOWN_V2)
    return web.json_response({"status": "ok"})

app.router.add_post("/send", send_message)
