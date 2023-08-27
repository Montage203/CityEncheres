document.addEventListener('DOMContentLoaded', function() {
    function updateTimer() {
        const countdownElement = document.getElementById('countdown');
        const targetDate = new Date('2023-12-31T23:00:00');
        const now = new Date();
        const timeDifference = targetDate - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.textContent = `Temps restant : ${days}j ${hours}h ${minutes}m ${seconds}s`;
    }

    const badges = [
        {
            id: 1,
            name: 'Bulldog Hippie',
            theme: 'animaux animal chien',
            colors: 'beige coloré',
            price: 10,
            lastBid: 'personne',
            bids: [
                /*{ bidAmount: 10, bidderName: 'Kevin' }*/
            ]
        },
        {
            id: 2,
            name: 'Pique',
            theme: 'Lance bouclier combat',
            colors: 'rouge jaune',
            price: 10,
            lastBid: 'personne',
            bids: [
                /*{ bidAmount: 50, bidderName: 'Martin' },
                { bidAmount: 10, bidderName: 'Julien' },
                { bidAmount: 1000, bidderName: 'Marie' }*/
            ]
        },
        {
            id: 3,
            name: 'Présentoir de badge de Saint-Valentin',
            theme: 'Saint-Valentin fête Couple Amour',
            colors: 'vert',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 4,
            name: 'La poule dorée',
            theme: 'animaux animal poule',
            colors: 'jaune',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 5,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 6,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 7,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 8,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 9,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 10,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 11,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 12,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 13,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 14,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 15,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 16,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 17,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 18,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 19,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 20,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 21,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 22,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 23,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 24,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 25,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 26,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 27,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 28,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 29,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 30,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 31,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 32,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 33,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 34,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        {
            id: 35,
            name: '',
            theme: '',
            colors: '',
            price: 10,
            lastBid: 'personne',
            bids: []
        },
        // Ajoutez d'autres badges ici
    ];

    function displayBadges(filteredBadges = badges) {
        const badgeGrid = document.querySelector('.badge-grid');
        badgeGrid.innerHTML = '';

        filteredBadges.forEach(badge => {
            const badgeElement = document.createElement('div');
            badgeElement.classList.add('badge', 'col-md-4');

            let bidInfo = '';
            if (badge.bids.length > 0) {
                bidInfo = `${getHighestBid(badge.id) || badge.price} diamants par ${getHighestBidder(badge.id) || badge.lastBid}`;
            } else {
                
                bidInfo = 'Il n\'y a pas encore d\'enchères';
            }

            badgeElement.innerHTML = `
            <img src="images/badge_image_${badge.id}.gif" alt="${badge.name}">
            <div class="detail">
                <h2>${badge.name}</h2>
                <p>ID : ${badge.id}</p>
                <p>Prix actuel: ${getHighestBid(badge.id) || badge.price} diamants par ${getHighestBidder(badge.id) || badge.lastBid}</p>
                <button class="toggleBidsButton" data-badge-id="${badge.id}">Voir les enchères</button>
                <div class="bidsList" style="display: none;"></div>
                </div>
            `;
            if (badge.bids.length === 0) {
                const toggleBidsButton = badgeElement.querySelector('.toggleBidsButton');
                toggleBidsButton.style.display = 'none';
            }
    
            badgeGrid.appendChild(badgeElement);
        });

        const bidButtons = document.querySelectorAll('.bidButton');
        bidButtons.forEach(button => {
            button.addEventListener('click', handleBid);
        });

        const toggleBidsButtons = document.querySelectorAll('.toggleBidsButton');
        toggleBidsButtons.forEach(button => {
            button.addEventListener('click', toggleBidsList);
        });
    }

    function handleBid(event) {
        event.preventDefault();
        
        const badgeId = event.target.getAttribute('data-badge-id');
        const badge = badges.find(b => b.id === parseInt(badgeId));
        
        if (badge) {
            const bidForm = document.createElement('form');
            bidForm.classList.add('bid-form');
            bidForm.innerHTML = `
                <label for="bidAmount">Montant de l'enchère (en diamant):</label>
                <input type="number" id="bidAmount" name="Prix" min="${getHighestBid(badge.id) || badge.price}" required>
                <label for="bidderName">Votre pseudo:</label>
                <input type="text" id="bidderName" name="Pseudo" required>
                <input type="hidden" name="badgeId" value="ID : ${badge.id}" readonly>
                <label for="bidderCommentaire">Commentaire:</label>
                <input type="text" id="bidderCommentaire" name="Commentaire">
                <button type="submit">Soumettre l'enchère</button>
            `;

            const bidAmountInput = bidForm.querySelector('#bidAmount');
            const bidderNameInput = bidForm.querySelector('#bidderName');
            const bidderCommentaireInput = bidForm.querySelector('#bidderCommentaire');
            
            bidForm.addEventListener('submit', function(event) {
                event.preventDefault();
            
                const bidAmount = parseInt(bidAmountInput.value);
                const bidderName = bidderNameInput.value;
                const bidderCommentaire = bidderCommentaireInput.value;

                const emailContent = `Montant: ${bidAmount} diamants\nPseudo: ${bidderName}\nCommentaire: ${bidderCommentaire}`;
                const mailToLink = `mailto:montage203@hotmail.com?subject=Nouvelle enchère&body=${encodeURIComponent(emailContent)}`;

                window.location.href = mailToLink;
            });

            const badgeElement = event.target.closest('.badge');
            badgeElement.appendChild(bidForm);
        }
    }

    function toggleBidsList(event) {
        const badgeId = event.target.getAttribute('data-badge-id');
        const badge = badges.find(b => b.id === parseInt(badgeId));
    
        if (badge) {
            const bidsList = event.target.nextElementSibling;
    
            if (bidsList.style.display === 'none') {
                bidsList.style.display = 'block';
                bidsList.innerHTML = '';
                badge.bids.slice().reverse().forEach(bid => {
                    const bidElement = document.createElement('p');
                    bidElement.innerHTML = `
                    <img src="https://api.habbocity.me/avatar_image.php?user=${bid.bidderName}&action=sit&direction=2&head_direction=3&gesture=std&size=n&headonly=0" alt="${bid.bidderName}" title="${bid.bidderName}"> 
                    ${bid.bidAmount} diamants`;
                    bidsList.appendChild(bidElement);
                });
            } else {
                bidsList.style.display = 'none';
            }
        }
    }

    function getLastBids(badgeId) {
        const badge = badges.find(b => b.id === badgeId);
        if (badge) {
            return badge.bids;
        }
        return [];
    }

    function getHighestBid(badgeId) {
        const bidsForBadge = getLastBids(badgeId);
        if (bidsForBadge.length > 0) {
            return Math.max(...bidsForBadge.map(bid => bid.bidAmount));
        }
        return null;
    }

    function getHighestBidder(badgeId) {
        const highestBid = getHighestBid(badgeId);
        if (highestBid !== null) {
            const bid = getLastBids(badgeId).find(bid => bid.bidAmount === highestBid);
            if (bid) {
                return bid.bidderName;
            }
        }
        return null;
    }

    function searchBadges(query) {
        const lowerCaseQuery = query.toLowerCase();
        const filteredBadges = badges.filter(badge => {
            const highestBidder = getHighestBidder(badge.id) || badge.lastBid;
            return (
                badge.name.toLowerCase().includes(lowerCaseQuery) ||
                badge.theme.toLowerCase().includes(lowerCaseQuery) ||
                badge.colors.toLowerCase().includes(lowerCaseQuery) ||
                badge.lastBid.toLowerCase().includes(lowerCaseQuery) ||
                highestBidder.toLowerCase().includes(lowerCaseQuery) ||
                badge.id.toString().includes(query) // Search by badge ID
            );
        });

        displayBadges(filteredBadges);
    }

    function sortBadgesByHighestBid() {
        const sortedBadges = badges.slice().sort((a, b) =>
            getHighestBid(b.id) - getHighestBid(a.id)
        );
        displayBadges(sortedBadges);
    }

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function(event) {
        const query = event.target.value;
        searchBadges(query);
    });



    
    updateTimer();
    setInterval(updateTimer, 1000);
    displayBadges();
});