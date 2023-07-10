import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import Header from "./components/header/Header";
import Section from "./components/section/Section";
import Vertical from "./components/layout/Vertical";
import Horizontal from "./components/layout/Horizontal";
import { Theme, ThemeDefault } from "./themes/Theme";
import { Dispatch, SetStateAction, createContext, useState } from "react";

type ThemeEditorContextProps = { setTheme: Dispatch<SetStateAction<Theme>> };

export const ThemeEditorContext = createContext<ThemeEditorContextProps>({
  setTheme: () => undefined,
});

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: overlay;
  align-items: center;
  color: ${(p) => p.theme.colors.text};
  background-color: ${(p) => p.theme.application.backgroundColor};
  gap: ${(p) => p.theme.spacings.medium}px;
  height: 100vh;
`;

const AppContent = styled.div`
  width: 80vw;
  background-color: ${(p) => p.theme.application.backgroundColor};
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacings.large * 2}px;
  align-items: center;
`;

function App() {
  const [theme, setTheme] = useState<Theme>(ThemeDefault);

  return (
    <ThemeEditorContext.Provider value={{ setTheme }}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <AppContent>
            <Section>
              <Vertical>
                <h2> About </h2>
                <motion.p>
                  In the whimsical world of frontend development, animation
                  reigns supreme. Like a mischievous jester, it transforms a
                  website into a playful playground. Buttons bounce like
                  hyperactive rubber balls, menus become mesmerizing mazes, and
                  animated characters bring pixels to life. With animation, the
                  digital realm becomes a virtual circus, where laughter and
                  surprises await at every click. So, embrace the magic of
                  animation and turn your website into a delightful playground
                  of joy
                </motion.p>
              </Vertical>
            </Section>
            <Section>
              <Vertical>
                <h2> Components </h2>
                <p>
                  In a world of whimsy, fruits defy gravity and bounce with
                  glee. Apples hop with anticipation, oranges roll like playful
                  balls, and pineapples soar through the air, crowned with spiky
                  majesty. These bouncing fruits embody joy and remind us to
                  embrace life's delightful surprises. So, let your imagination
                  take flight and savor the whimsical dance of bouncing fruit!{" "}
                </p>
              </Vertical>
              <Horizontal style={{ justifyContent: "space-evenly" }}>
                <motion.img
                  style={{ width: 100, height: 100 }}
                  src="https://purepng.com/public/uploads/large/purepng.com-orangefruitsorangetasteysweetripefood-981524726253ocbqg.png"
                  whileFocus={{ rotate: 180 }}
                  whileTap={{
                    rotate: [
                      0, 30, 60, 90, 120, 150, 180, 210, 230, 260, 290, 310,
                      330, 360,
                    ],
                  }}
                />
                <motion.img
                  style={{ width: 100, height: 100 }}
                  src="https://clipart-library.com/images_k/pineapple-transparent/pineapple-transparent-15.png"
                  animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  }}
                  whileTap={{
                    scale: 0.8,
                    rotate: 360,
                  }}
                />
                <motion.img
                  style={{ width: 100, height: 100 }}
                  src="https://freepngimg.com/thumb/apple_fruit/24454-5-apple-fruit-transparent-image.png"
                  animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  }}
                  whileTap={{
                    scale: 0.8,
                    rotate: 360,
                  }}
                />
              </Horizontal>
            </Section>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              style={{
                backgroundColor: theme.colors.surface,
                width: "100%",
                padding: theme.spacings.medium,
                height: "200px",
              }}
              viewport={{ margin: "-20px" }}
            >
              <Horizontal>
                <Vertical>
                  <h2>Here is a funny section with some text </h2>
                  <p>Some text that is inspired by lorem ipsum.</p>
                </Vertical>
              </Horizontal>
            </motion.div>
          </AppContent>
        </AppContainer>
      </ThemeProvider>
    </ThemeEditorContext.Provider>
  );
}

export default App;
