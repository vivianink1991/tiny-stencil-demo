import { newSpecPage } from '@stencil/core/testing';
import { MyDropdown } from '../my-dropdown';

describe('my-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyDropdown],
      html: `<my-dropdown></my-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <my-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-dropdown>
    `);
  });
});
