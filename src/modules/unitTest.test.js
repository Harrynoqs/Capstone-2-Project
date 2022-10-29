/**
 * @jest-environment jsdom
 */
import { homeItmes } from './homeItemsCounter.js';
import { commentCounter } from './commentFunctions.js';

describe('Home items, Comments', () => {
  test('count homeItems', () => {
    document.body.innerHTML = `
    <div class="allItems">
      <div class="each-container"></div>
      <div class="each-container"></div>
      <div class="each-container"></div>
      <div class="each-container"></div>
      <div class="each-container"></div>
    </div>
    `;

    const itemNum = homeItmes();

    expect(itemNum).toBe(5);
  });

  test('count comments', () => {
    // Arrange
    const ContainerNode = document.createElement('div');
    for (let i = 0; i < 10; i += 1) {
      const CommentNode = document.createElement('p');
      ContainerNode.appendChild(CommentNode);
    }

    // Act
    const commentCount = commentCounter(ContainerNode);

    // Assert
    expect(commentCount).toBe(10);
  });
});
