import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { SCENES } from "./data/timelineData";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Secret } from "./scenes/Scene2Secret";
import { Scene3Settings } from "./scenes/Scene3Settings";
import { Scene4UncheckMic } from "./scenes/Scene4UncheckMic";
import { Scene5OutroCTA } from "./scenes/Scene5OutroCTA";
import { DynamicCaptions } from "./components/DynamicCaptions";

export const MainReel: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: "#050811" }}>
      {/* Visual Scenes Sequenced */}
      <Sequence from={SCENES[0].startFrame} durationInFrames={SCENES[0].durationFrames}>
        <Scene1Hook />
      </Sequence>

      <Sequence from={SCENES[1].startFrame} durationInFrames={SCENES[1].durationFrames}>
        <Scene2Secret />
      </Sequence>

      <Sequence from={SCENES[2].startFrame} durationInFrames={SCENES[2].durationFrames}>
        <Scene3Settings />
      </Sequence>

      <Sequence from={SCENES[3].startFrame} durationInFrames={SCENES[3].durationFrames}>
        <Scene4UncheckMic />
      </Sequence>

      <Sequence from={SCENES[4].startFrame} durationInFrames={SCENES[4].durationFrames}>
        <Scene5OutroCTA />
      </Sequence>

      {/* Neat & Clean Kinetic Typography Layer */}
      <DynamicCaptions />

      {/* Master Voiceover Audio */}
      <Audio src={staticFile("voice.mp3")} volume={1.0} />

      {/* Subtle Background Music (Low Volume so voice is loud & clear) */}
      <Audio src={staticFile("bg_music.mp3")} volume={0.035} loop />

      {/* Cinematic SFX Beats */}
      <Sequence from={0} durationInFrames={45}>
        <Audio src={staticFile("sfx/bass_hit.wav")} volume={0.4} />
      </Sequence>

      <Sequence from={110} durationInFrames={30}>
        <Audio src={staticFile("sfx/pop.wav")} volume={0.5} />
      </Sequence>

      <Sequence from={285} durationInFrames={30}>
        <Audio src={staticFile("sfx/whoosh.wav")} volume={0.4} />
      </Sequence>

      <Sequence from={546} durationInFrames={30}>
        <Audio src={staticFile("sfx/digital_scan.wav")} volume={0.35} />
      </Sequence>

      <Sequence from={825} durationInFrames={30}>
        <Audio src={staticFile("sfx/whoosh.wav")} volume={0.4} />
      </Sequence>

      <Sequence from={900} durationInFrames={30}>
        <Audio src={staticFile("sfx/click.wav")} volume={0.6} />
      </Sequence>

      <Sequence from={1125} durationInFrames={45}>
        <Audio src={staticFile("sfx/shield_up.wav")} volume={0.5} />
      </Sequence>
    </AbsoluteFill>
  );
};
