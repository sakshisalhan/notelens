import { test, expect } from '@playwright/test';

test('user asks question and gets AI answer', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Type question
  await page.fill('textarea', 'What is AI?');

  // Click button
  await page.click('button');

  // Wait for response
  const answer = page.locator('text=Artificial Intelligence');

  // Verify response appears
  await expect(answer).toBeVisible();
});