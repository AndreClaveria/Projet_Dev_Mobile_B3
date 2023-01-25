// const showNotification = () => {
//   const channelId = await notifee.createChannel({
//     id: 'default',
//     name: 'Default Channel',
//   });
//   console.log('channel créer');
//   // Display a notification
//   await notifee.displayNotification({
//     title: 'Jouer a Guardian Tales!',
//     body: 'Notre application vient du jeu Guardian Tales, télécharger le!',
//     android: {
//       channelId,
//       smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
//       // pressAction is needed if you want the notification to open the app when pressed
//       pressAction: {
//         id: 'default',
//       },
//     },
//   });
//   console.log('notification affiché');
// }

// export default showNotification;