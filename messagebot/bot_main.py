import asyncio
from aiohttp import web

from bot_config import dp, bot, app
from database_config import init_database
from router import router

async def main():
    init_database()
    runner = web.AppRunner(app)
    await runner.setup()
    site = web.TCPSite(runner, "0.0.0.0", 8080)
    await site.start()
    dp.include_router(router)
    await dp.start_polling(bot)
    
if __name__ == "__main__":
    asyncio.run(main())