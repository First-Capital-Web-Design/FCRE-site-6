$(document).ready(function(){

var suneet = '<div class="board-member-header">' +
                        '<h1>Suneet Singal</h1>' +
                        '<h2>Chairman & CEO</h2>' +
                        '</div>' +
                        '<div class="board-member-info">' +
                        '<p>Mr. Singal is the Chief Executive Officer and Chairman of the Board of First Capital Real Estate Trust Inc, and founding principal of its predecessor company First Capital Real Estate Investments. Mr. Singal has ﬁnance and development experience in multiple asset classes, ranging from residential and commercial retail and wholesale loan origination, underwriting and securitization and development, to the acquisition of raw unentitled land, entitlement completion and map approvals, bond ﬁnancing, infrastructure buildout and vertical construction, real estate asset rehabilitation, asset lease-up and asset stabilization. Mr. Singal began his real estate finance career in 2001 in lending origination and eventually formed his own company growing over $75M in annual origination as a direct lender. He eventually merged and acquired a national Inc. 500 real estate lending platform in 2006 and grew it to over $1B a year in originations in both retail and wholesale as a direct lender with business in over 40 states. After the real estate market turn in 2007-08, he advised and became a principal in multiple development projects ranging from land development both residential and commercial including master plans, multi-family, self-storage, hospitality, industrial, retail/QSR, and mixed use properties. Mr. Signal’s experience in both real estate finance and principal advisory for over 14 years gives him a unique advantage in the marketplace, understanding multiple  components of real estate transactions. Mr. Singal currently holds a Bachelor of Arts degree in Finance with a concentration in Investments from California State University-Sacramento and is a licensed California  Mortgage Broker.</p>' +
                        '</div>';

var name2 = '<div class="board-member-header">' +
                        '<h1>Ron Cobb</h1>' +
                        '<h2><em>President, First Capital Real Estate Investments, LLC</em></h2>' +
                        '</div>' +
                        '<div class="board-member-info">' +
                        '<p>Mr. Cobb began his professional career in real estate as a construction Project Manager with a major regional construction company. His most notable project included managing the construction of the $50MM Tonopalo luxury timeshare project in Lake Tahoe, CA. In that capacity, he was responsible for all phases of development from securing pre-development entitlements through owner acceptance of individual units. Tonopalo has since become a model for best practices used in the development of beach front property in the Lake Tahoe Basin by the Tahoe Regional Planning Agency. Also in the Lake Tahoe Basin, Mr. Cobb oversaw the construction of the successful retail component of the Heavenly Village in Stateline, NV. Prior to these projects,  he oversaw the remodel of a 40 year old motel into what is now the $100MM Siena Hotel Spa Casino in downtown Reno, NV. The remodel added luxury suites, a spa ranked in the top five of all spas in the West. In addition to his duties as a commercial real estate broker and partner with Commercial Partners of Nevada, Mr. Cobb serves as Managing Partner of New Mexico’s preeminent active adult community, Jubilee Los Lunas where he oversees the development of this 422 unit subdivision. Mr. Cobb is a distinguished public servant. He spent four years on both the Airport Authority Advisory Board and  the Home Consortium Advisory Board. He spent three and a half years with the Washoe County Planning Commission and served one year as its Chairman. Most recently, Mr. Cobb completed nearly eight years on the City of Reno Planning Commission with three years as its Chairman. In these roles, he has helped shape the future of Reno by advising the City of Reno Council on a myriad of issues, including natural resources, economics, housing, population, land use and zoning. Furthermore, he has reviewed and advised on all major development projects proposed within the City.</p>' +
                        '</div>';

var name3 = '<div class="board-member-header">' +
                        '<h1>John G. Fields</h1>' +
                        '<h2>President, Special Task Force</h2>' +
                        '</div>' +
                        '<div class="board-member-info">' +
                        '<p>Mr. Fields has over 20 years of experience in the securities and investment field with extensive experience in financial analysis, private equity transactions and raising capital. Mr. Fields leads strategy for all of the First Capital verticals and is utilized when special complex projections arise. Prior to joining the First Capital team, Mr. Fields was the Managing Director of The Transfinity Group founded in 2010. The company specialized in implementing a creative and revolutionary funding strategy for commercial real estate sustainability upgrades. The strategy is expected to have a significant impact in reducing carbon consumption while providing outsized returns for institutional investors. Mr. Fields invented a new asset class by developing a straightforward and consumer-friendly proprietary funding mechanism that is ideally suited for the critically underserved small business owner. He assembled the requisite Executive Team, Board of Directors and developed distribution channels with both private and public corporations. In creating a new asset class, a significant amount of legal compliance and enforceability issues required resolutions. In the 2013 legislature, he led the effort to enact California legislation (AB905) by meeting with lobbyists, policy advisors and legislatures from both political parties. Mr. Fields raised capital from a wide-range of international and domestic investors and led the A round, subsequent funding rounds and acquired and negotiated a funding partner to provide over $100,000,000 of project capital. He is recognized as an innovator, who excels at achieving desired results and bringing goals to realization. Mr. Fields began his career on the Pacific Options Exchange where he executed and managed derivative trading strategies. He further solidified my expertise with tenures at CSI Capital Management (Suntrust), Barclays Global Investors (BlackRock), Integrated Capital Markets and SunGard Data Systems. He’s held positions at The White House, OPIC Fellowship (Overseas Private Investment Corporation) and Deloitte & Touché, all located in Washington D.C.; the United Nations in New York City; and the Indiana Governor’s Fellowship for Senator Evan Bayh III in Indianapolis. Mr. Fields attended American University and Wabash College with honors.</p>' +
                        '</div>';

var name4 = '<div class="board-member-header">' +
                        '<h1>Serge Kasarda</h1>' +
                        '<h2>Chief Operating Officer</h2>' +
                        '</div>' +
                        '<div class="board-member-info">' +
                        '<p>Mr. Kasarda is responsible for day to day operations and asset management at First Capital Real Estate Investments. Mr. Kasarda founded Seventieth Street Investment Partners (SSIP) in 2008 as a capital structure advisory firm to provide consulting services to real estate owners. Mr. Kasarda’s prior experience has given him unique insights into the debt and equity structuring needs of real estate owners. His experience over the past 25 years has included structuring of senior and subordinated debt as well as direct and joint venture equity investments. Prior to forming SSIP, Mr. Kasarda was a Director at BlackRock where he was hired to start the west coast Joint Venture equity group. In 2005 he transferred to the real estate high yield debt group to develop equity hybrid loan structures and acquire B Notes, Mezzanine debt and Preferred equity. Investments have included all property types ranging from performing to non performing.  Prior to joining BlackRock, Mr. Kasarda was a senior vice president at Bank of America in San Francisco originating transitional real estate loans and working out non performing loans of acquired banks. Mr. Kasarda is a 25 year veteran of the real estate industry with a vast knowledge of the debt an equity markets through his investment advisory and commercial banking experience.</p>' +
                        '</div>';


        $(".name").click(function(){

          console.log("hello");

             $(".name").removeClass("name-active");
             $(this).addClass("name-active");

             if($(this).hasClass("suneet-tab")){
               $(".board-info-container").html(suneet);
             } else if ($(this).hasClass("name2-tab")) {
               $(".board-info-container").html(name2);
             } else if ($(this).hasClass("name3-tab")) {
               $(".board-info-container").html(name3);
             } else if ($(this).hasClass("name4-tab")) {
               $(".board-info-container").html(name4);
             } else if ($(this).hasClass("name5-tab")) {
               $(".board-info-container").html(name5);
             }
        });

});
