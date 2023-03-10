import Masonry from 'react-masonry-css'

const MasonryGrid = ({children}) => {
    const breakpointColumnsObj = {
        default: 3,
        700: 2,
        500: 1
      };
    
    return (
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {children}
        </Masonry>
    );
};

export default MasonryGrid;
