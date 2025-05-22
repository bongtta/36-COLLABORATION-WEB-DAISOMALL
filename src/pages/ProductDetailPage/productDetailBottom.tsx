import Divider from '@components/common/divider/Divider';
import BottomCarousel from './components/Carousel/BottomCarousel';
import Review from './components/Review/Review';
import TodayDiscovery from './components/TodayDiscovery/TodayDiscovery';
import theme from '@styles/theme';
import Accordion from './components/Accordion/Accordion';

const ProductDetailBottom = () => (
  <div>
    <TodayDiscovery />
    <Divider height="8px" color={theme.colors['gray-06']} />
    <BottomCarousel />
    <Divider height="8px" color={theme.colors['gray-06']} />
    <Review />
    <Divider height="8px" color={theme.colors['gray-06']} />
    <Accordion />
  </div>
);

export default ProductDetailBottom;
