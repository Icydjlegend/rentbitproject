import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  Icon,
  LinearGradient,
  Link,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignInScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientSB}
        endY={100}
        endX={100}
        color2={theme.colors.primary}
        color1={theme.colors.darker_pink}
        startX={0}
      >
        <KeyboardAwareScrollView
          contentContainerStyle={styles.KeyboardAwareScrollViewv1Content}
          showsVerticalScrollIndicator={true}
        >
          <View>
            <Image
              style={styles.Imageze}
              source={Images.LogoWhite}
              resizeMode={'contain'}
            />
          </View>
          <Spacer top={24} right={8} bottom={24} left={8} />
          <View>
            <View>
              <Text style={[styles.TextjE, { color: theme.colors.surface }]}>
                {'Email'}
              </Text>

              <View
                style={[
                  styles.Viewq7,
                  { borderColor: theme.colors.lightInverse },
                ]}
              >
                <Icon
                  style={styles.Icona0}
                  name={'MaterialIcons/alternate-email'}
                  size={20}
                  color={theme.colors.surface}
                />
                <View style={styles.View_9c}>
                  <TextInput
                    onChangeText={newTextInputValue => {
                      const textInputValue = newTextInputValue;
                      try {
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.TextInputbt,
                      { color: theme.colors.surface },
                    ]}
                    value={null}
                    placeholder={'JaneDoh@email.com'}
                    keyboardType={'email-address'}
                    placeholderTextColor={theme.colors.lightInverse}
                    autoCapitalize={'none'}
                  />
                </View>
              </View>
            </View>
            <Spacer top={12} right={8} bottom={12} left={8} />
            <View>
              <Text style={[styles.TextRQ, { color: theme.colors.surface }]}>
                {'Password'}
              </Text>

              <View
                style={[
                  styles.ViewMd,
                  { borderColor: theme.colors.lightInverse },
                ]}
              >
                <Icon
                  style={styles.IconC7}
                  name={'MaterialIcons/lock-outline'}
                  size={20}
                  color={theme.colors.surface}
                />
                <View style={styles.Viewzl}>
                  <TextInput
                    onChangeText={newTextInputValue => {
                      const textInputValue = newTextInputValue;
                      try {
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.TextInputNb,
                      { color: theme.colors.surface },
                    ]}
                    value={null}
                    placeholder={'MySecretPassword'}
                    keyboardType={'default'}
                    placeholderTextColor={theme.colors.lightInverse}
                    secureTextEntry={true}
                  />
                </View>
              </View>
            </View>
          </View>
          <Spacer top={32} right={8} bottom={32} left={8} />
          <View>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('MainTabs', { screen: 'HomeScreen' });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidWT,
                {
                  color: theme.colors.surface,
                  borderColor: theme.colors.mediumInverse,
                  backgroundColor: theme.colors.transparent,
                },
              ]}
              title={"Let's Go"}
            />
            <Spacer top={12} right={8} bottom={12} left={8} />
            <View style={styles.ViewDN}>
              <Link
                onPress={() => {
                  try {
                    navigation.navigate('AuthStack', {
                      screen: 'SignUpScreen_xWq5H1BT',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[styles.LinkE0, { color: theme.colors.surface }]}
                title={"Don't have an account? Sign up"}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imageze: {
    width: 125,
    height: 32,
  },
  TextBN: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
  },
  TextC1: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  },
  TextjE: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
  },
  Icona0: {
    width: 20,
    height: 20,
  },
  TextInputbt: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
  },
  View_9c: {
    flex: 1,
    marginLeft: 4,
  },
  Viewq7: {
    paddingBottom: 12,
    borderBottomWidth: 2,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextRQ: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
  },
  IconC7: {
    width: 20,
    height: 20,
  },
  TextInputNb: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 18,
  },
  Viewzl: {
    flex: 1,
    marginLeft: 4,
  },
  ViewMd: {
    paddingBottom: 12,
    borderBottomWidth: 2,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ButtonSolidWT: {
    borderRadius: 12,
    fontFamily: 'Poppins_500Medium',
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 16,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
  },
  LinkE0: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    textAlign: 'center',
  },
  ViewDN: {
    alignSelf: 'center',
  },
  KeyboardAwareScrollViewv1Content: {
    justifyContent: 'center',
    paddingLeft: 48,
    paddingTop: 48,
    paddingRight: 48,
    paddingBottom: 48,
  },
  LinearGradientSB: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(SignInScreen);
