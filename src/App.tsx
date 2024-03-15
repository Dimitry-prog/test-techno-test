import { AppRoot, CellButton, Panel, PanelHeader, SplitLayout, usePlatform, View } from "@vkontakte/vkui";
import { useState } from "react";
import TaskOneForm from "./features/task-one/components/task-one-form.tsx";

function App() {
  const platform = usePlatform();
  const [activePanel, setActivePanel] = useState('task1');

  return (
    <AppRoot>
      <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none"/>}>
        <View activePanel={activePanel}>
          <Panel id="task1">
            <PanelHeader>Panel task one</PanelHeader>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <CellButton onClick={() => setActivePanel('task2')}>Go to task two</CellButton>
              <TaskOneForm/>
            </div>
          </Panel>
          <Panel id="task2">
            <PanelHeader>Panel task two</PanelHeader>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <CellButton onClick={() => setActivePanel('task1')}>Go to task one</CellButton>
            </div>
          </Panel>
        </View>
      </SplitLayout>
    </AppRoot>
  )
}

export default App
