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

const SignUpScreen_xWq5H1BT = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientzg}
        endY={100}
        endX={100}
        color2={theme.colors.primary}
        color1={theme.colors.darker_pink}
        startX={0}
      >
        <KeyboardAwareScrollView
          contentContainerStyle={styles.KeyboardAwareScrollViewpmContent}
          showsVerticalScrollIndicator={true}
        >
          <View>
            <Image
              style={styles.Imagewb}
              source={Images.LogoWhite}
              resizeMode={'contain'}
            />
          </View>
          <Spacer top={24} right={8} bottom={24} left={8} />
          <View>
            <View>
              <Text style={[styles.Text_8Y, { color: theme.colors.surface }]}>
                {'Name'}
              </Text>

              <View
                style={[
                  styles.Viewr7,
                  { borderColor: theme.colors.lightInverse },
                ]}
              >
                <Icon
                  style={styles.Icon_5g}
                  name={'Feather/user'}
                  size={20}
                  color={theme.colors.surface}
                />
                <View style={styles.Viewsl}>
                  <TextInput
                    onChangeText={newTextInputValue => {
                      const textInputValue = newTextInputValue;
                      try {
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.TextInput_3F,
                      { color: theme.colors.surface },
                    ]}
                    value={null}
                    placeholder={'Jane Doh'}
                    keyboardType={'default'}
                    placeholderTextColor={theme.colors.lightInverse}
                    autoCapitalize={'words'}
                  />
                </View>
              </View>
            </View>
            <Spacer top={12} right={8} bottom={12} left={8} />
            <View>
              <Text style={[styles.Textkb, { color: theme.colors.surface }]}>
                {'Email'}
              </Text>

              <View
                style={[
                  styles.ViewfI,
                  { borderColor: theme.colors.lightInverse },
                ]}
              >
                <Icon
                  style={styles.IconbA}
                  name={'MaterialIcons/alternate-email'}
                  size={20}
                  color={theme.colors.surface}
                />
                <View style={styles.Viewta}>
                  <TextInput
                    onChangeText={newTextInputValue => {
                      const textInputValue = newTextInputValue;
                      try {
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.TextInputbd,
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
              <Text style={[styles.TextBx, { color: theme.colors.surface }]}>
                {'Password'}
              </Text>

              <View
                style={[
                  styles.ViewFs,
                  { borderColor: theme.colors.lightInverse },
                ]}
              >
                <Icon
                  style={styles.IconQB}
                  name={'MaterialIcons/lock-outline'}
                  size={20}
                  color={theme.colors.surface}
                />
                <View style={styles.ViewBw}>
                  <TextInput
                    onChangeText={newTextInputValue => {
                      const textInputValue = newTextInputValue;
                      try {
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.TextInputcl,
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
                styles.ButtonSolidMv,
                {
                  color: theme.colors.surface,
                  borderColor: theme.colors.mediumInverse,
                  backgroundColor: theme.colors.transparent,
                },
              ]}
              title={'Get Started'}
            />
            <Spacer top={12} right={8} bottom={12} left={8} />
            <View style={styles.ViewT7}>
              <Link
                onPress={() => {
                  try {
                    navigation.navigate('SignInScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[styles.Link_03, { color: theme.colors.surface }]}
                title={'Already have an account? Sign in'}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imagewb: {
    width: 125,
    height: 32,
  },
  Textdm: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
  },
  TextBZ: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  },
  Text_8Y: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
  },
  Icon_5g: {
    width: 20,
    height: 20,
  },
  TextInput_3F: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
  },
  Viewsl: {
    flex: 1,
    marginLeft: 4,
  },
  Viewr7: {
    paddingBottom: 12,
    borderBottomWidth: 2,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Textkb: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
  },
  IconbA: {
    width: 20,
    height: 20,
  },
  TextInputbd: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
  },
  Viewta: {
    flex: 1,
    marginLeft: 4,
  },
  ViewfI: {
    paddingBottom: 12,
    borderBottomWidth: 2,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextBx: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
  },
  IconQB: {
    width: 20,
    height: 20,
  },
  TextInputcl: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 18,
  },
  ViewBw: {
    flex: 1,
    marginLeft: 4,
  },
  ViewFs: {
    paddingBottom: 12,
    borderBottomWidth: 2,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ButtonSolidMv: {
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
  Link_03: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    textAlign: 'center',
  },
  ViewT7: {
    alignSelf: 'center',
  },
  KeyboardAwareScrollViewpmContent: {
    justifyContent: 'center',
    paddingLeft: 48,
    paddingTop: 48,
    paddingRight: 48,
    paddingBottom: 48,
  },
  LinearGradientzg: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(SignUpScreen_xWq5H1BT);
