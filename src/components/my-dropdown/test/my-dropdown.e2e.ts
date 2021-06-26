import { newE2EPage } from '@stencil/core/testing';

describe('my-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-dropdown></my-dropdown>');

    const element = await page.find('my-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
