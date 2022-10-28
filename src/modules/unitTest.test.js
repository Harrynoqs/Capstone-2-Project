/* eslint-disable */
// import { commentCounter } from "./commentFunctions.js";
import { homeItmes } from "./homeItemsCounter.js";
import { commentCounter } from "./commentFunctions.js";

describe('Home items, Comments', () => {
   
    test('Count home items', () => {
      // Arrange
      let dataArray = [
        {
          description: 'Men cloths',
          id: 1,
        },
        {
          description: 'Bags',
          id: 2,
        }
      ];
      // Act
       let itemNumber = homeItmes(dataArray);
      
      // Assert
      expect(itemNumber).toBe(2);
    });

    test('Comments counter', () => {
      // Arrange
      let dataArray = [
        {
          comment: 'This is nice!',
          creation_date: '2021-01-10',
          username: 'Harry',
        },
        {
          comment: 'This is nice!',
          creation_date: '2021-28-10',
          username: 'Mike',
        }]
      // Act
       let commentNumber = commentCounter(dataArray);
      
      // Assert
      expect(commentNumber).toBe(2);
    });
  });
  