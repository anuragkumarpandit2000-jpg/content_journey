export interface SegmentTiming {
  id: number;
  startFrame: number;
  endFrame: number;
  hinglish: string;
  keywords: string[];
}

export const TIMELINE_SEGMENTS: SegmentTiming[] = [
  {
    "id": 0,
    "startFrame": 0,
    "endFrame": 256,
    "hinglish": "Blender me 3D assets model karne me ghanto ya din lagte hain? 2026 me ye workflow poori tarah badal chuka hai!",
    "keywords": [
      "BLENDER",
      "3D ASSETS",
      "GHANTO",
      "2026",
      "WORKFLOW"
    ]
  },
  {
    "id": 1,
    "startFrame": 256,
    "endFrame": 508,
    "hinglish": "Detailed game props, characters aur vehicles banane ke liye topology aur UV unwrapping me dimag kharab ho jaata hai!",
    "keywords": [
      "TOPOLOGY",
      "UV UNWRAPPING",
      "DIMAG KHARAB"
    ]
  },
  {
    "id": 2,
    "startFrame": 508,
    "endFrame": 827,
    "hinglish": "Solution hai Microsoft Trellis aur TripoSR – sirf ek single flat 2D image do aur 5 second ke andar complete textured 3D mesh ready!",
    "keywords": [
      "TRELLIS",
      "TRIPOSR",
      "2D IMAGE",
      "5 SECOND",
      "3D MESH"
    ]
  },
  {
    "id": 3,
    "startFrame": 827,
    "endFrame": 1125,
    "hinglish": "Direct Blender Python script se mesh auto-import hota hai, vertex normals clean hote hain, aur instant rendering ya Unreal Engine export ke liye ready!",
    "keywords": [
      "BLENDER PYTHON",
      "AUTO-IMPORT",
      "UNREAL ENGINE"
    ]
  },
  {
    "id": 4,
    "startFrame": 1125,
    "endFrame": 1419,
    "hinglish": "Ye 2D to 3D AI generator script aur Blender automation addon bilkul FREE chahiye? Abhi comment karo 3D aur link seedha DM me bhej doonga!",
    "keywords": [
      "3D AI GENERATOR",
      "BLENDER ADDON",
      "FREE",
      "COMMENT",
      "3D"
    ]
  }
];
