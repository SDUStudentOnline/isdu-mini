import { View } from '@tarojs/components';
import classes from './index.module.scss';

const Index: React.FC = () => {
  return (
    <View className={classes.pageContainer}>
      <View className={classes.navBar}>i 山大</View>
      <View className={classes.main}>Test</View>
    </View>
  );
};

export default Index;
