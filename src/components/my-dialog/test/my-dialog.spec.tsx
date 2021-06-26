import { newSpecPage } from '@stencil/core/testing';
import { MyDialog } from '../my-dialog';

describe('my-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyDialog],
      html: `<my-dialog></my-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <my-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-dialog>
    `);
  });
});
