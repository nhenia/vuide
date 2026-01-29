from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.on("console", lambda msg: print(f"CONSOLE: {msg.text}"))
        page.on("pageerror", lambda exc: print(f"PAGE ERROR: {exc}"))

        try:
            page.goto('http://localhost:3000', wait_until='networkidle')
            print("Page loaded")
            page.wait_for_selector('text=NEON OCCULT', timeout=10000)
            print("Found NEON OCCULT")
            page.screenshot(path='verification/splash_loaded.png')

            # Wait for onboarding
            page.wait_for_selector('text=SKIP', timeout=10000)
            print("Found SKIP")
            page.click('text=SKIP')
            page.wait_for_timeout(2000)
            page.screenshot(path='verification/home_loaded.png')
        except Exception as e:
            print(f"Error during verification: {e}")
            page.screenshot(path='verification/error.png')
        finally:
            browser.close()

if __name__ == "__main__":
    verify()
