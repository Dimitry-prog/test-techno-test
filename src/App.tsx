import { AppRoot, CellButton, Group, Panel, PanelHeader, SplitLayout, usePlatform, View } from "@vkontakte/vkui";
import { useState } from "react";

function App() {
  const platform = usePlatform();
  const [activePanel, setActivePanel] = useState('greetings');

  return (
    <AppRoot>
      <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none"/>}>
        <View activePanel={activePanel}>
          <Panel id="greetings">
            <PanelHeader>Panel greetings</PanelHeader>
            <Group>
              <CellButton onClick={() => setActivePanel('form')}>Go to panel form</CellButton>
            </Group>
          </Panel>
          <Panel id="form">
            <PanelHeader>Panel form</PanelHeader>
            <Group>
              <CellButton onClick={() => setActivePanel('finish')}>Go to panel finish</CellButton>
            </Group>
          </Panel>
          <Panel id="finish">
            <PanelHeader>Panel finish</PanelHeader>
            <Group>
              <CellButton onClick={() => setActivePanel('greetings')}>Go to panel greetings</CellButton>
            </Group>
          </Panel>
        </View>
      </SplitLayout>
    </AppRoot>
  )
}

export default App
