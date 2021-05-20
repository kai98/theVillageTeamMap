// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 4;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = true;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 16.5;
var followBearing = 29;
var followPitch = 0;

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    // style: 'mapbox://styles/mapbox/light-v10',
    style: 'mapbox://styles/jagannara/ckn55myy107so17ofzd1zrfnq',
    // style: 'mapbox://styles/mapbox/satellite-v8',
    // style: 'mapbox://styles/mapbox/outdoors-v10',
    accessToken: 'pk.eyJ1IjoiamFnYW5uYXJhIiwiYSI6ImNrZXo2ajNoMDEwbmsyd21mejg5cWc4OGUifQ.pC7npbs1ZAjAjOgLGDNSaA',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Discovering University Place',
    subtitle: 'Exploring themes visually through bite-sized videos',
    byline: 'By Village BID Team',
    footer: 'Village BID Team <3',
    chapters: [
        {
            id: 'slide-0',
            title: 'Key Challenges at University Place',
            image: 'images/village.jpg',

            description: "The Village Alliance Established 20 years ago, consists of 44 blocks. It covers a diverse cross-section of Greenwich Village. and has more than 10,000 residents.<br /><br /> We spent the last few months working with the Village Alliance to understand the key challenges in University Place.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: 'Pedestrian Safety and Comfort',
            image: 'images/pedestrian.jpg',
            description: "Pedestrian Safety and Comfort are paramount for the sustained vibrancy of the neighborhood, especially as the pedestrian realm grows. Currently, for every car on the street, there are 30 pedestrians.",

            location: {
                // location information is from the drive route
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: 'Control Vehicular Flows',
            image: 'images/vehicularFlows.png',

            description: "Most traffic spills over from surrounding systems e.g. ambulance traffic due to the nearby Lennox hospital.  Vehicular traffic must gradually be constrained to improve safety and comfort as well as work towards a greenway.",

            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: 'Manage Street Character',
            image: 'images/streetCharacter.png',

            description: "Important for both residents and businesses that the street-space and buildings are consistent with the rich history of the neighborhood.",

            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'drive-slide-3',
            title: 'Support Local Business',
            image: 'images/localCafe.png',

            description: "Increased foot traffic is good for everyone, but should be done without further burdening the businesses. Closing lanes for example makes truck deliveries difficult.",
            // description: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/KwqBgkGqaVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <br/> <br/>The outdoor restaurants have a raw and authentic quality. First inspired and mooted by a landscape architectural company in the city, the local restaurateurs took interest in building their own models of the sidewalk cafes based on the pattern provided by the architectural firm, that have helped the cafes integrate into the street very well - in contrast to the building on East 12th.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },

    ]
};
