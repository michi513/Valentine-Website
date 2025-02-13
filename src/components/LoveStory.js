
import React from 'react';

const LoveStoryPage = ({onBack}) => {
  return (
    <div className="love-story-page">
      <h2>Our Love Story &lt;Mitzi's POV &gt;</h2>
      <p>I remember walking across the pedestrian lane, adjusting my clothes, running my fingers through my hair, my heartbeat echoing in my chest. And then I saw you—standing on the second floor of Vista Mall, videotaping me. I couldn’t help but feel embarrassed. You expected me to be taller, but as I ran toward the stairs, our eyes met, and it was like my heart stopped. Or maybe it raced—either way, it felt as though it might explode.

It was the first time I’d felt that way about anyone, in a moment so simple yet so profound. I felt a strange comfort, as if I wanted to wrap you in a hug, but you turned away shyly, apologizing, saying you were too bashful. We ended up driving around SM, unsure of where to go. Nothing in Vista Mall seemed right, so we found ourselves eating Samgyup in SM. It was delicious, but maybe it was just because I was with you.

Afterward, we grabbed rolled ice cream. I liked yours more than mine, and when you handed me yours, I felt butterflies stir in my stomach. Then the rain came, and we wandered, unsure of where to go next. I had this sudden urge to cover you with my polo, embarrassed by the thought of being too forward. I was trying to be careful, calculating my every move, hoping not to make you feel weird. You were taller than me, and I hadn’t shaved my armpits—oh, how silly that felt, laughing at myself in the rain.

But when we finally got in the car, I felt this quiet relief. I was so at ease with you. I could laugh with you, share jokes, be my weird self. It felt like I could just be—and I never wanted that day to end.

When I got home, I didn’t reply right away. My mind was swirling with words, thoughts, emotions, all wanting to spill out at once. But instead, I decided to write it all down, to capture that feeling. So, I made a poem about how your smile is the prettiest I've ever seen</p>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default LoveStoryPage;
