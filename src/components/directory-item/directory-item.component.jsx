

import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryBody
} from './directory-item.styles';

const DirectoryItem = ({category}) => {
  const {imageUrl, title} = category;
  return (
    <DirectoryItemContainer to={`shop/${title.toLowerCase()}`}>
      <BackgroundImage imageUrl={imageUrl}/>
      <DirectoryBody>
        <h2>{title}</h2>
        <p>Shop now</p>
      </DirectoryBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;