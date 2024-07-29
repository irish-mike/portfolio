
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
    "description_html": "<h3 class=\"mt-5 mb-3\">Introduction</h3><p class=\"lead mb-5\">Welcome to the world of <strong>Simple Sampler</strong>, a powerful yet intuitive VST3 plugin designed for music producers and audio enthusiasts. Built in C++ using the Juce Audio Framework, Simple Sampler aims to bring ease and flexibility to your audio sampling needs. The journey of creating Simple Sampler was both challenging and rewarding. Leveraging the Juce Audio Framework provided a robust foundation for building a versatile plugin. From designing the user interface to implementing core audio functionalities, every aspect was meticulously crafted to ensure a seamless user experience. Feel free to view this on my <a href=\"https://bitbucket.org/michael_grinnell/sampler/src/master/\" target=\"_blank\" class=\"link-primary\">GitHub</a>.</p>",
    "content_html": "<h2 class=\"mb-4\">How Simple Sampler Works</h2><p class=\"mb-4\">Simple Sampler is all about making sample manipulation straightforward and enjoyable. Here's a quick overview of its main features:</p><ul class=\"list-unstyled mb-5\"><li class=\"mb-3\"><strong>MIDI Input:</strong> Place the plugin on a MIDI track in your DAW to get started.</li><li class=\"mb-3\"><strong>Gain Control:</strong> Adjust the overall volume with ease.</li><li class=\"mb-3\"><strong>Sample Loading:</strong> Load samples by dropping files into the sample area or using the file browser. Supported formats include mp3, wav, and aif, with a maximum length of 15 seconds.</li></ul><h3 class=\"mt-5 mb-3\">Envelope and Filter Controls</h3><p class=\"mb-5\">The ADSR envelope controls (Attack, Decay, Sustain, Release) allow you to shape the dynamics of your sound, while the dual multi-mode ladder filters provide precise control over your audio's frequency content. You can switch between 12 and 24 dB per octave roll-off for greater flexibility.</p><h3 class=\"mt-5 mb-3\">Example Code</h3><pre class=\"p-3 rounded\" style=\"background-color: #f8f9fa; color: #212529;\"><code>#include&lt;iostream&gt;\n\nusing namespace std;\n\nint add(int n);\n\nint main() {\n  int n;\n\n  cout &lt;&lt; \"Enter a positive integer: \";\n  cin &gt;&gt; n;\n\n  cout &lt;&lt; \"Sum =  \" &lt;&lt; add(n);\n\n  return 0;\n}\n\nint add(int n) {\n  if (n != 0)\n    return n + add(n - 1);\n  return 0;\n}</code></pre>"
  }
  