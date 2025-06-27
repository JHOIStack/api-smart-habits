import prisma from "../../lib/prisma";

export const statService = {
    getTotals: async () => {
        const [users, habits, userHabits, recommendations, interactions, profiles] = await Promise.all([
            prisma.user.count(),
            prisma.habit.count(),
            prisma.userHabit.count(),
            prisma.recommendation.count(),
            prisma.interaction.count(),
            prisma.profile.count()
        ]);
        const total = users + habits + userHabits + recommendations + interactions + profiles;
        return {
            users,
            habits,
            userHabits,
            recommendations,
            interactions,
            profiles,
            total
        };
    }
}