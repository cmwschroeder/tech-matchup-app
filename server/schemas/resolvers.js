const { Tech, Matchup } = require('../models');

const resolvers = {
    Query: {
        tech: async () => {
            return await Tech.find({});
        },
        matchup: async (parent, { matchupId }) => {
            return  await Matchup.findOne({ _id: matchupId });
        },
        matchups: async () => {
            return await Matchup.find({});
        }
    },
    Mutation: {
        createMatchup: async (parent, { tech1, tech2, tech1_votes, tech2_votes }) => {
            const matchup = await Matchup.create({ tech1, tech2, tech1_votes, tech2_votes });
            return matchup;
        },
        createVote: async (parent, { id, techNum }) => {
            return await Matchup.findOneAndUpdate(
                { _id: id },
                { $inc: { [`tech${techNum}_votes`]: 1 } },
                { new: true }
              );
        }
    }
}

module.exports = resolvers;