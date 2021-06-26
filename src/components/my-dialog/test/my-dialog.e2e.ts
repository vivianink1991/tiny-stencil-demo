import { newE2EPage } from '@stencil/core/testing';

describe('my-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-dialog></my-dialog>');

    const element = await page.find('my-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
