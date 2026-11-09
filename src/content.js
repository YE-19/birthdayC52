// ★ EDIT THIS FILE ONLY ★

const content = {
  // --- Background music ---
  // Put your .mp3 file in public/music/ and set the filename here
  // Set to null to hide the music button
  music: '/music/music.mp3',

  // --- Secret Date / Password Protection ---
  password: {
    code: '1312',
    title: 'enter a secret date',
    subtitle: 'a date only we know ♡',
    buttonText: 'UNLOCK ♡',
    errorMessages: [
      'no try again',
      'no try again',
    ],
    sticker: '/images/spiderman-hanging.png',
  },

  welcome: {
    greeting: 'hello ',
    name: 'Ammoryy',
    question: 'would you like to open your gift?',
    yesButton: 'YES PLEASE',
    noButton: 'NO THANKS',
  },

  noThanks: {
    message: "i promise you'll like it",
    tryAgainButton: 'TRY AGAIN',
  },

  menu: {
    title: 'pick a gift',
    subtitle: 'choose one to open ↓',
    items: [
      { id: 'memories', icon: '📸', sticker: '/images/spiderman-camera.png', label: 'Captured\nMemories' },
      { id: 'flowers', icon: '🌷', sticker: '/images/spiderman-flowers.png', label: 'Virtual\nFlowers' },
      { id: 'song', icon: '🎵', sticker: '/images/spiderman-music.png', label: 'our\nsong' },
      { id: 'letter', icon: '💌', sticker: '/images/spiderman-crouch-heart.png', label: 'Love\nLetter' },
    ],
  },

  memories: {
    title: 'our memories',
    returnButton: 'RETURN',
    images: [
      { src: '/images/memory1.jpg', label: '❤️', tag: 'my fav' },
      { src: '/images/memory2.jpg', label: '❤️', tag: 'cute' },
      { src: '/images/memory3.jpg', label: '❤️', tag: 'forever' },
      { src: '/images/memory4.jpg', label: '❤️', tag: 'love' },
      { src: '/images/memory5.jpg', label: '❤️', tag: 'always' },
      { src: '/images/memory6.jpg', label: '❤️', tag: 'mine' },
      { src: '/images/memory7.jpg', label: '❤️', tag: 'us' },
    ],
  },

  flowers: {
    title: 'for you',
    returnButton: 'RETURN',
    flowerName: 'TULIP',
    flowerSubtitle: 'just like you — rare & beautifulEvery time I spend with you becomes my favorite time, and every memory we make together becomes my favorite memory',
    poems: [
      `"احلي واشطر مترجم فالدنيا يارب اشوفك حاجه كبيره اوي قدام عيني"`,
      `"دايمًا يعمار هتفضل الاقرب ليا"`,
      `"اتمني كل السنين الجايه كلها نكون سوا ونعيش سوا كل تفاصيل حياتنا"`,
      `"اتمني تكون سنه حلوه عليك ينور عيني"`,
      `"يارب دايما نكون مع بعض ونكبر سوا"`,
      `"يارب اشوفك مبسوط دايما يحبيبي"`,
      `"احلي حد فالدنيا يكبرر يعموري"`,
      `"كل سنه وانت اغلي حد ف حياتي"`,
    ],
  },

  song: {
    title: 'our song',
    returnButton: 'RETURN',
    // Put your .mp3 in public/music/ and update this path:
    audioSrc: '/music/music.mp3',
    remindsText: 'this song always makes me think of you',
    songTitle: 'our song',
    artist: 'for you 🎵',
    highlight: 'every lyric feels like us 💕',
  },

  letter: {
    title: 'a letter',
    returnButton: 'RETURN',
    message: `عموور كل سنه وانت طيب ينور عيوني كل سنة وانت احلي  واجمل شخص ف حياتي بجد كل سنة وانت معايا وقريب مني واقرب حدد ليا بجد بجد والي بلجألو ف كل حاجه وبحكيلو كل حاجه منغير ما افكر حقيقي وكل سنة وانت ف حياتي وف يومي وف كل لحظه وتفصيله ليا ، بجد معنديش اغلي منك فحياتي ولا باقيه علي حد غير عليك ولا بيفرقلي حد غيرك ، وقد ايه انا مبسوطة انك في حياتي رغم كل الي عدينا ومرينا بيه ده يجي ناس وتمشي ناس واحنا زي ما احنا 😭♥️♥️و يارب السنة دي تكون سنه حلوه عليك وتحقق فيها كل اللي نفسك فيه وتشوف فيها كل حاجة حلوة وتفضل دايمًا ناجح ومبسوط واشوفك احلي واشطر واحسن مترجم فالدنيا دي كلها واشوفك من انجح الناس الي فالدنيا ومتشوفش حاجه وحشه فحياتك ابدا يعيوني ودايما تكون معايا وجمبي بجد بحب كل وقت معاك وكل هزارنا وكلامنا وكل ذكراياتنا وعلاقتنا الي محدش هيفهمها غيرنا دي 😝🤚🏻 وغصب عن اي حد احنا كده كده مكملين ودايما ابقي معاك ف كل حاجه وكل الاوقات الي جايه نقضيها سوا ، وبجد بحب كل حاجه بتعملها معاك بحبك انت شخصيا بحب كل حاجه فيك بجد وكل حاجه فيك مميزه موت بنسبالي ومستحيل اشوفها ف حد تاني ولا اعيش الي عيشتو معاك مع حد تاني ، بحب كلامك وتشجيعك ليا ودايما انت هتبقي واخد مكانه اهم حد فحياتي ولله مهما اي حد جه فحياتي هتفضل اه انت التوب ف كل حاجه وهتفضل اجمل حد دخل حياتي واكتر حد بحب اقعد معاه واتكلم معاه واكتر حد فاهمني فالدنيا كلها بقا بجد وبنتكلم ف كل حاجه واي حاجه بجد😭♥️♥️ويارب مهما الأيام اتغيرت بينا نفضل دايمًا مع بعض وف كل مره بجد هختارك انك تكون دايما فحياتي ، أنا بحب كل تفاصيلنا سوا حتي لو حاجه صغيره او موقف صغير ف دايما بيبقي احلي حاجه عدت عليا وبفضل دايما فاكره كل حاجه بينا وكل مره تيجي علي بالي وافتكرها بفرح اكنها حاجه لسه حاصله امبارح ونفسي نفضل سوا ونعمل ذكريات قدد كدهووونفضل ، مفيش اي حاجه هتوصف كل اللي جوايا ليك بس بجد وجودك فارق معايا، ووجودك ، واتمني مهما حصل بينا نفضل نرجع لبعض وملناش غير بعض كده زي ما حصل ف الخمس السنين الي اتكلمنا فيهم دول😭😭😭😂😂 واهو كده كده محدش بيفرق غيرك معايا ودايما مهما بيحصل بنرجع احسن من الاول وعمري ما بعرف اشيل منك بجد ، ويارب نفضل حارقين كل الناس كده😝😝واكتر حد بجد بعرف اكون بطبيعتي معاه ومبفكرش ف اي كلام او ف اي حاجه بعملها وانا معاك ، ويارب كل السنين الي جايه نكون مع بعض ونكبر دايما سوا واحلي حد يكبر واحلي طالب جامعي فالدنيا واشطرهم يكوتي ربنا يديمنا لبعض ويخليك دايما ليا يحبيبي ودايما هفضل احبك بنفس درجه الحب وعمر ولا غلاوتك وليا حبي ليك هيقل بجد كل سنه وانت طيب وبخير واشوفك دايما ف احسن احوالك ي احلي عمور فالدنيا 😋❤️❤️❤️❤️❤️❤️❤️❤️`,
    signoff: 'I love you always,',
    signature: 'Your love ♡',
  },
}

export default content
