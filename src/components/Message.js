// src/components/MessagePage.js
import React from 'react';

const MessagePage = ({onBack}) => {
  return (
    <div className="message-page">
      <h2>Happy Valentine's day to the girl who gave me purpose in life!</h2>
      <h4>Love Letter</h4>
      <p>It is the only love
      unlike the other love—<br></br>
      It doesn’t come with conditions,<br></br>
      it doesn’t ask for reasons.<br></br>
      It doesn’t need to be understood,<br></br>
      it just exists.<br></br>
      A force, steady and certain.<br></br>
      An echo in the quietest spaces,<br></br>
      an answer to the heart’s deepest question.<br></br>
      <br></br>
If I were to speak of it, <br></br>
I would tell you<br></br>
it is the love that remains<br></br>
even as everything else shifts.<br></br>
It is the constant in the chaos,<br></br>
the anchor when the storm is relentless.<br></br>
It doesn’t fade with time,<br></br>
it only grows,<br></br>
like the roots of a tree<br></br>
deep within the earth.<br></br>
<br></br>
Even when your words clash against me, <br></br>
when they strike hard,<br></br>
like the slam of doors that cannot be undone,<br></br>
I will still love you.<br></br>
It will be the love that survives<br></br>
the harshest of winds,<br></br>
the love that understands<br></br>
the silence between the storms.<br></br>
<br></br>
And though one day<br></br>
you may leave<br></br>
and take with you pieces of my soul,<br></br>
still, I will love you.<br></br>
This love will remain,<br></br>
like the space between the stars<br></br>
that holds everything together<br></br>
without asking for anything in return.<br></br>
<br></br>
No matter where you wander,<br></br>
no matter how far you go,<br></br>
before any of it—<br></br>
I loved you.<br></br>
Before the world began, <br></br>
before the sun kissed the sky, <br></br>
before anything else existed—<br></br>
I loved you.<br></br>
<br></br>
And I will love you,<br></br>
as this love takes parts of me,<br></br>
as it writes itself into the fabric of who I am.<br></br>
But even with each piece it takes,<br></br>
I will be whole,<br></br>
It is the only love.<br></br></p>
      <button onClick={onBack}>Back</button>
    </div>

  );
};

export default MessagePage;
