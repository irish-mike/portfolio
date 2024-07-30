export default {
  "id": "1",
  "date": "May 15",
  "author": "Michael Grinnell",
  "tags": ["C++", "Juce", "VST"],
  "title": "Simple Sampler VST Plugin",
  "subtitle": "Demo of my simple sampler VST plugin",
  "featured_media": {
    "title": "Simple Sampler VST Plugin",
    "url": "https://www.youtube.com/embed/wDchsz8nmbo",
    "type": "video"
  },
  "description_md": `
### Introduction

Welcome to the world of **Simple Sampler**, a powerful yet intuitive VST3 plugin designed for music producers and audio enthusiasts. Built in C++ using the Juce Audio Framework, Simple Sampler aims to bring ease and flexibility to your audio sampling needs. 

The journey of creating Simple Sampler was both challenging and rewarding. Leveraging the Juce Audio Framework provided a robust foundation for building a versatile plugin. From designing the user interface to implementing core audio functionalities, every aspect was meticulously crafted to ensure a seamless user experience. 

Feel free to view this on my [GitHub](https://bitbucket.org/michael_grinnell/sampler/src/master/).
`,
  "content_md": `
## How Simple Sampler Works

Simple Sampler is all about making sample manipulation straightforward and enjoyable. Here's a quick overview of its main features:

- **MIDI Input:** Place the plugin on a MIDI track in your DAW to get started.
- **Gain Control:** Adjust the overall volume with ease.
- **Sample Loading:** Load samples by dropping files into the sample area or using the file browser. Supported formats include mp3, wav, and aif, with a maximum length of 15 seconds.

### Envelope and Filter Controls

The ADSR envelope controls (Attack, Decay, Sustain, Release) allow you to shape the dynamics of your sound, while the dual multi-mode ladder filters provide precise control over your audio's frequency content. You can switch between 12 and 24 dB per octave roll-off for greater flexibility.

### Example Code

\`\`\`cpp
#include <iostream>

using namespace std;

int add(int n);

int main() {
  int n;

  cout << "Enter a positive integer: ";
  cin >> n;

  cout << "Sum = " << add(n);

  return 0;
}

int add(int n) {
  if (n != 0)
    return n + add(n - 1);
  return 0;
}
\`\`\`
`
};
