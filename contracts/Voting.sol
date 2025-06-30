// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        uint256 id;
        string name;
        string party;
        string imageURL;
        string slogan;
        string[] platform;
    }

    Candidate[] public candidates;

    constructor() {
        string[] memory platform1 = new string[](3);
        platform1[0] = "Education funding";
        platform1[1] = "Health & Social Services";
        platform1[2] = "Economy";

        candidates.push(
            Candidate({
                id: 1,
                name: "Marwah Rizqy",
                party: "Quebec Liberal Party",
                imageURL: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7hKYaIpYFlXU1L9ckLAv1DAHc6ZftV6e-ZrmJjZJgh11-vgxr7qOgzXC_D7NxkAhiynUMtIYCIQ0Uy0I35sZyuw",
                slogan: "Unis pour l'education",
                platform: platform1
            })
        );

        string[] memory platform2 = new string[](3);
        platform2[0] = "Affordable housing";
        platform2[1] = "Climate action";
        platform2[2] = "Workers' rights";

        candidates.push(
            Candidate({
                id: 2,
                name: "Gabriel Nadeau-Dubois",
                party: "Quebec solidaire",
                imageURL: "https://www.ccmm.ca/~/media/Images/Activites/Evenements/A-la-une/Gabriel-Nadeau-Dubois/GND_1160x771.jpg",
                slogan: "Justice sociale maintenant",
                platform: platform2
            })
        );
    }

    function getCandidateCount() public view returns (uint256) {
        return candidates.length;
    }

    function getCandidate(uint256 index) public view returns (
        uint256 id,
        string memory name,
        string memory party,
        string memory imageURL,
        string memory slogan,
        string[] memory platform
    ) {
        require(index < candidates.length, "Candidate index out of bounds");
        Candidate storage c = candidates[index];
        return (c.id, c.name, c.party, c.imageURL, c.slogan, c.platform);
    }
}