/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
      id
      name
      photos {
        items {
          id
          uploadDate
          image
          albumID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
      id
      name
      photos {
        items {
          id
          uploadDate
          image
          albumID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
      id
      name
      photos {
        items {
          id
          uploadDate
          image
          albumID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePhoto = /* GraphQL */ `
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
      id
      uploadDate
      image
      albumID
      album {
        id
        name
        photos {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;