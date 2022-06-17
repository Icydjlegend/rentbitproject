import React from 'react';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  ButtonSolid,
  Link,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const myFunctionName = (text, onPress) => {
    return (
      <Button onPress={onPress}>
        <Text>{text}</Text>
      </Button>
    );
  };

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <ImageBackground
        style={styles.ImageBackground_9L}
        resizeMode={'cover'}
        source={Images.WelcomeBg}
      >
        <View style={styles.Views5}>
          <View style={styles.ViewxC}>
            <Image
              style={styles.ImageOL}
              resizeMode={'contain'}
              source={Images.LogoWhite}
            />
            <Spacer top={12} right={8} bottom={12} left={8} />
            <Text
              style={[styles.Text_5D, { color: theme.colors.mediumInverse }]}
              textBreakStrategy={'highQuality'}
              ellipsizeMode={'tail'}
              allowFontScaling={true}
            >
              {'Discover your next stay.'}
            </Text>

            <Text
              style={[
                theme.typography.body1,
                styles.TextWc,
                { color: theme.colors.mediumInverse },
              ]}
              textBreakStrategy={'highQuality'}
              ellipsizeMode={'tail'}
              allowFontScaling={true}
            >
              {'The best rental properties, curated for you. '}
            </Text>
          </View>

          <View style={styles.ViewC1}>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('SignUpScreen_xWq5H1BT');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolid_7w,
                {
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.surface,
                },
              ]}
              title={'Create An Account'}
            />
            <Spacer top={12} right={8} bottom={12} left={8} />
            <View style={styles.ViewRb}>
              <Link
                onPress={() => {
                  try {
                    navigation.navigate('SignInScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[styles.LinkbB, { color: theme.colors.surface }]}
                title={'Sign in to your account'}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageOL: {
    width: 125,
    height: 50,
  },
  Text_5D: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 26,
  },
  TextWc: {
    fontFamily: 'Poppins_400Regular',
  },
  ViewxC: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 64,
  },
  ButtonSolid_7w: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  LinkbB: {
    fontFamily: 'Poppins_500Medium',
  },
  ViewRb: {
    alignSelf: 'center',
  },
  ViewC1: {
    paddingRight: 24,
    paddingBottom: 64,
    paddingLeft: 24,
  },
  Views5: {
    justifyContent: 'space-between',
    flex: 1,
  },
  ImageBackground_9L: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(WelcomeScreen);
