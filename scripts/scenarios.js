window.GAME_SCENARIOS = [
{
 id:1,title:"Understand priorities",manager:"Alex",role:"Team Manager",initials:"A",summary:"Two existing commitments compete with a new urgent request.",attempts:3,
 profile:"Alex is direct and focused on delivery. They usually respond well when you explain the impact of competing work and offer a practical way forward.",
 clues:["Alex has asked for an urgent report for senior management.","You already have two deliverables due today.","Alex has not yet acknowledged those existing commitments."],
 situation:"You have two deliverables due today. Alex asks you to prepare an updated performance report for senior management, also due today. The full report will take several hours.",
 task:"Decide how to respond, negotiate a workable arrangement and confirm what has been agreed.",
 steps:[
 {prompt:"Alex says: “I need the updated report today. Can you take care of it?” What do you do first?",options:[
 ["A","Agree immediately","You accept the extra work without checking the impact on your existing commitments.",0],
 ["B","Explain that you cannot do it","You decline, but don't explore the urgency or possible alternatives.",1],
 ["C","Clarify the urgency and explain your existing commitments","You make the competing work visible before agreeing to a plan.",3],
 ["D","Ask Alex to choose a priority without context","You ask for a decision but give Alex little information to make one.",1]]},
 {prompt:"Alex explains that senior management needs key figures tomorrow, but the full report is preferable. What is your next move?",options:[
 ["A","Promise all three deliverables today","You commit to an outcome without checking whether it is realistic.",0],
 ["B","Offer to provide the essential figures today and the full report tomorrow","You protect the urgent need while proposing a realistic sequence.",3],
 ["C","Ask Alex to move the report to next week","You suggest a delay without exploring the actual requirement.",1],
 ["D","Work late and say nothing about the impact","You absorb the workload without agreeing priorities or capacity.",0]]},
 {prompt:"Alex accepts your proposal. How do you close the conversation?",options:[
 ["A","Say thanks and start working","You move forward, but the revised agreement is not explicitly confirmed.",1],
 ["B","Restate what will be delivered and when, and check the other commitments remain aligned","You close the loop so both of you have the same understanding.",3],
 ["C","Ask Alex to send the request by email","A written request may help, but it does not confirm the agreed priorities.",1]]}
 ],
 practiceLabel:"Write the short confirmation you would send Alex.",
 practicePrompt:"Confirm the essential figures today, the full report tomorrow, and how your existing commitments will be handled.",
 sample:"Just to confirm: I'll send the essential figures today and the full report tomorrow. I'll keep the two existing deliverables on track based on that agreed sequence. Let me know if you want to adjust those priorities.",
 criteria:["Recognises competing commitments","Communicates capacity","Seeks alignment on priorities","Explores realistic alternatives","Confirms the agreement"],
 takeawayTitle:"Competing priorities conversation guide",takeawayPrompts:["How I will make current commitments visible","Questions I can ask to clarify urgency","How I can propose a realistic sequence","How I will confirm the agreement"],
 outcomeGood:"Alex agrees that the essential figures are the priority today and the full report can follow tomorrow.",
 outcomeMixed:"Alex still needs all three tasks today. You need to discuss capacity, support, scope or sequencing rather than silently accepting an unrealistic workload."
},
{
 id:2,title:"Manage expectations",manager:"Camille",role:"Project Manager",initials:"C",summary:"A deadline moves forward while external dependencies remain uncertain.",attempts:3,
 profile:"Camille is deadline-focused and appreciates early warnings. They want options, but do not want uncertain information presented as fact.",
 clues:["The project is currently due Friday; Camille has moved the deadline to Wednesday.","The scope has not changed.","Two external teams have not confirmed when they can provide required information."],
 situation:"Camille moves a project deadline from Friday to Wednesday without reducing scope. Team A and Team B must provide information before you can complete it. Neither team has confirmed delivery.",
 task:"Communicate the delivery risk, establish what is known and agree how to manage uncertainty.",
 steps:[
 {prompt:"Camille says: “We need the whole project by Wednesday. Can you make that happen?” What is your first response?",options:[
 ["A","Say yes and work out the dependencies later","This creates an expectation before you know whether delivery is possible.",0],
 ["B","Say it is impossible","You flag a concern but do not explain the dependency or offer a way forward.",1],
 ["C","Explain that your part can be ready, but you need to confirm both external dependencies before committing","You separate what you control from what is not yet confirmed.",3],
 ["D","Ask the teams to hurry up and assume they will","You rely on an unconfirmed outcome.",0]]},
 {prompt:"Team A confirms Tuesday afternoon. Team B says it has competing priorities and cannot yet confirm a date. What do you tell Camille?",options:[
 ["A","Tell Camille both teams are on track","That overstates what Team B has confirmed.",0],
 ["B","Give Camille an estimated date for Team B without checking","An invented date could mislead stakeholders.",0],
 ["C","Share Team A's confirmed date, explain Team B's uncertainty and ask whether partial information would help","You provide a factual update and explore a useful option.",3],
 ["D","Wait until both teams reply before updating Camille","You delay communicating a known risk.",1]]},
 {prompt:"Team B cannot reprioritise and has no confirmed delivery date. Camille insists Wednesday remains the deadline. What is your next move?",options:[
 ["A","Ask Team B's manager whether any partial information can be provided by Tuesday, and explain its validation status","You explore a limited option without presenting preliminary information as final.",3],
 ["B","Tell Camille the figures will arrive Tuesday","That is not what Team B confirmed.",0],
 ["C","Remove Team B's information and say nothing about the gap","You risk hiding information stakeholders need to interpret the project.",0],
 ["D","Ask Camille which trade-off matters most: a Wednesday update with gaps or a later complete project","You make the delivery trade-off explicit for a decision.",3]]}
 ],
 practiceLabel:"Write a concise update to Camille.",
 practicePrompt:"Include what is confirmed, what remains uncertain, the impact on Wednesday and the next action. Do not invent a delivery date.",
 sample:"My part and Team A's information are on track for Tuesday afternoon. Team B cannot yet confirm delivery. I'm checking whether they can provide preliminary information by Tuesday; it would be clearly marked as unvalidated. We can provide a Wednesday update showing confirmed information and outstanding items, or revisit the date for a complete version.",
 criteria:["Identifies delivery risks","Separates confirmed facts from assumptions","Explains dependencies and impact","Offers workable options","Avoids unsupported promises"],
 takeawayTitle:"Project risk and expectations update",takeawayPrompts:["What is confirmed","What remains uncertain and why","Who needs to be contacted","Options or trade-offs to present","When I will provide the next update"],
 outcomeGood:"Camille agrees to make the Wednesday update transparent: confirmed information is presented, outstanding items are identified, and unvalidated figures are clearly labelled or excluded.",
 outcomeMixed:"The deadline remains Wednesday, but the information gap has not been resolved. Keep the risk visible and agree what can responsibly be delivered."
},
{
 id:3,title:"Communicate effectively",manager:"Daniel",role:"Operations Manager",initials:"D",summary:"A long update needs to be concise without losing important context.",attempts:3,
 profile:"Daniel prefers concise updates for routine matters. When customer impact or operational risk is involved, he needs enough detail to make a sound decision.",
 clues:["Daniel has previously asked for shorter updates.","The project is delayed and the cause is still being investigated.","Some customers may experience disruption to a service they rely on."],
 situation:"You sent Daniel a long update that did not clearly explain the status, customer impact or risk. Daniel replies: “Can you give me the short version? What's happening and is anything at risk?”",
 task:"Structure a useful update, distinguish confirmed facts from uncertainty and adapt detail to customer impact.",
 steps:[
 {prompt:"What should the first version of your update prioritise?",options:[
 ["A","A short status, known cause or uncertainty, customer impact and next action","You give Daniel the information needed to understand the situation.",3],
 ["B","A full timeline of every discussion","This may bury the information Daniel needs.",1],
 ["C","Say the project is delayed but there are no risks","You make a definitive risk statement while the investigation is incomplete.",0],
 ["D","Say the team is working on it and will update him later","This is concise but too vague to support a decision.",0]]},
 {prompt:"Daniel asks what is confirmed and what is still being investigated. What do you do?",options:[
 ["A","Present assumptions as likely facts so the update sounds decisive","This risks misleading Daniel and customers.",0],
 ["B","Separate the confirmed delay from the cause and impact still being assessed","You are transparent about what is known and unknown.",3],
 ["C","Avoid mentioning customer impact until the investigation is complete","You may withhold a relevant warning.",0],
 ["D","Send the full investigation notes","You provide detail without adapting it to the question.",1]]},
 {prompt:"You learn that some customers may experience disruption. Daniel says: “Keep it brief. I don't need the whole investigation.” What is the best adjustment?",options:[
 ["A","Remove the customer impact to keep the message short","Brevity should not remove information that changes the response.",0],
 ["B","Keep the update brief but include the disruption, investigation status and next update commitment","You adapt length without losing material information.",3],
 ["C","Send the entire technical investigation anyway","You ignore the request for a concise update.",1],
 ["D","Promise service will be restored within 24 hours","You promise an outcome that has not been confirmed.",0]]}
 ],
 practiceLabel:"Rewrite the update for Daniel.",
 practicePrompt:"Use a clear status, customer impact, what is known or still being checked, and the next update. Do not promise a restoration time.",
 sample:"We're experiencing a service disruption affecting some customers. Our team is investigating the cause and assessing the impact. We haven't confirmed a restoration time. We'll provide another update within 24 hours, even if the restoration time is still unknown.",
 criteria:["Leads with the current status","Includes relevant customer impact","Separates confirmed and unconfirmed information","Gives a clear next action or update","Adapts detail to the recipient and risk"],
 takeawayTitle:"Concise status update template",takeawayPrompts:["Current status","Customer or operational impact","What is confirmed","What is still being checked","Next action and update time"],
 outcomeGood:"Daniel agrees the update contains the right level of detail: concise, accurate and clear about customer impact and follow-up.",
 outcomeMixed:"The update is either too vague to guide action or too detailed to make the key message clear. Rework it around status, impact, uncertainty and next action."
},
{
 id:4,title:"Take ownership of problems",manager:"Priya",role:"Department Manager",initials:"P",summary:"You discover incorrect figures in a report that has already been sent.",attempts:2,
 profile:"Priya values early visibility and responsible action. She may be unavailable at times, so you need to use the appropriate escalation route rather than wait indefinitely.",
 clues:["A report containing incorrect figures has already been sent.","You need to establish which figures are wrong and who may have relied on them.","Priya is currently unavailable."],
 situation:"You discover that figures in a report you sent earlier are incorrect. You do not yet know the full impact. Priya is unavailable.",
 task:"Take appropriate corrective action, communicate promptly and recognise what still needs verification or approval.",
 steps:[
 {prompt:"What is your immediate priority?",options:[
 ["A","Wait until Priya is available before doing anything","This delays visibility and may allow others to rely on incorrect information.",0],
 ["B","Quietly replace the report and hope nobody notices","This hides the correction and may leave recipients using the original.",0],
 ["C","Verify the error and likely impact, preserve the original details and notify the appropriate contact","You begin fact-finding and make the issue visible.",3],
 ["D","Send a correction to everyone immediately without checking the figures","A rushed correction may introduce more errors.",1]]},
 {prompt:"Priya is still unavailable. What do you do?",options:[
 ["A","Send a written update to Priya and notify the appropriate alternate contact under your process","You avoid waiting indefinitely and use an appropriate escalation route.",3],
 ["B","Keep trying Priya and take no other action","Repeated attempts do not address the immediate risk.",0],
 ["C","Tell recipients the figures are definitely corrected before validation","You claim more than you know.",0],
 ["D","Ask a colleague to decide whether the report should be recalled, without giving them the facts","You pass on the decision without useful context.",1]]},
 {prompt:"You have identified the incorrect figures, but the full impact is still being checked. What should your update include?",options:[
 ["A","Only apologise for the mistake","An apology alone does not explain action or risk.",0],
 ["B","State the error, what you have checked, who has been notified, what corrective steps are underway and what remains unverified","You give a clear account of ownership and limits.",3],
 ["C","Say the report is fixed because you corrected the spreadsheet","You confuse changing a file with confirming the impact and correction.",0],
 ["D","Wait until every detail is known before notifying anyone","You delay important information.",0]]}
 ],
 practiceLabel:"Write the update you would send Priya.",
 practicePrompt:"Include the issue, what you have verified, who you have notified, what corrective steps are underway and what remains to be checked.",
 sample:"I found an error in the figures in the report sent earlier. I've identified the affected section and am checking which recipients may have relied on it. I've notified [appropriate contact] and am preparing a corrected version, subject to validation. The full impact is not yet confirmed. I'll update you by [time] with the verified position and any further action needed.",
 criteria:["Acknowledges and describes the issue","Communicates proactively","Takes appropriate corrective action","Considers impact and recipients","Recognises what needs verification or approval"],
 takeawayTitle:"Issue escalation and ownership checklist",takeawayPrompts:["What happened and what is verified","Who may be affected","Who I have notified","What corrective action is underway","What still needs approval or verification"],
 outcomeGood:"Priya receives a clear update with actions already taken, people notified and outstanding checks identified.",
 outcomeMixed:"The issue is visible, but action or verification is incomplete. Continue through the appropriate escalation route and avoid claiming the issue is resolved until it is confirmed."
},
{
 id:5,title:"Challenge constructively",manager:"Morgan",role:"Customer Experience Manager",initials:"M",summary:"A proposed customer template promises a resolution time the team cannot always meet.",attempts:2,
 profile:"Morgan is confident in the proposed change and wants a consistent customer experience. They may initially defend the idea, but specific evidence and a workable alternative help keep the discussion productive.",
 clues:["Morgan has introduced a template promising resolution within 24 hours.","Some case types take longer than 24 hours to resolve.","Customers still need clear expectations and regular updates."],
 situation:"Morgan introduces a customer template promising that every issue will be resolved within 24 hours. You know some case types take longer, even when the team acts promptly.",
 task:"Understand the intended outcome, explain the risk with evidence and propose a safer alternative.",
 steps:[
 {prompt:"How do you open the conversation?",options:[
 ["A","Tell Morgan the template is wrong","You challenge the decision without first understanding its purpose or explaining the risk.",0],
 ["B","Ask what outcome Morgan wants the template to achieve, then explain the case types that may exceed 24 hours","You understand the objective and frame a specific concern.",3],
 ["C","Say nothing and use the template as written","You leave a known risk unaddressed.",0],
 ["D","Ask the team to ignore the template when it is inconvenient","You create inconsistent practice without resolving the issue.",0]]},
 {prompt:"Morgan says: “Customers want certainty. We need to sound confident.” How do you respond?",options:[
 ["A","Agree that confidence matters, then explain that promising a resolution we cannot control may damage trust","You acknowledge the objective while explaining the consequence.",3],
 ["B","Say customers should know better than to expect a quick resolution","You shift responsibility to customers and avoid the policy concern.",0],
 ["C","Repeat that the promise is unrealistic without adding evidence","You do not help Morgan evaluate the risk.",1],
 ["D","Suggest removing all time commitments from customer communication","You remove useful reassurance rather than improving it.",1]]},
 {prompt:"What alternative would you propose?",options:[
 ["A","Promise resolution within 24 hours only for easy cases, without defining them","This leaves staff to make inconsistent judgements.",1],
 ["B","Promise an update within 24 hours, while explaining that resolution time depends on the issue","You offer a reliable commitment the team can control.",3],
 ["C","Promise resolution within 48 hours instead","You change the number without checking whether it is realistic.",1],
 ["D","Tell customers the team will respond when it can","This is vague and offers no useful expectation.",0]]}
 ],
 practiceLabel:"Write what you would say to Morgan.",
 practicePrompt:"Acknowledge the goal, explain the specific risk and offer the alternative of an update within 24 hours rather than guaranteed resolution.",
 sample:"I can see the aim is to give customers a clear expectation. My concern is that some cases need investigation or input from another team, so we may not be able to resolve every issue within 24 hours. Could we commit to an update within 24 hours instead? That gives customers a reliable timeframe without promising an outcome we may not control.",
 criteria:["Understands the manager's objective","Identifies a specific concern","Uses evidence or a concrete example","Offers a workable alternative","Responds constructively to resistance"],
 takeawayTitle:"Constructive challenge conversation guide",takeawayPrompts:["What outcome the manager is aiming for","The specific risk or evidence","The likely consequence if unchanged","My proposed alternative","How I will respond if the manager disagrees"],
 outcomeGood:"Morgan agrees to revise the template so customers receive an update within 24 hours without a guaranteed resolution promise.",
 outcomeMixed:"Morgan may keep the original template. You have raised the concern; document the agreed direction and use the appropriate route if the wording creates a material customer or policy risk."
},
{
 id:6,title:"Build trust",manager:"Taylor",role:"Project Lead",initials:"T",summary:"You missed a Wednesday update commitment and need to address it proactively.",attempts:1,
 profile:"Taylor values dependable follow-through. They expect you to raise missed commitments early, explain the current position and give a realistic next step.",
 clues:["You committed to sending Taylor a project update by Wednesday.","It is now Thursday and you did not send it.","Taylor has not chased you yet."],
 situation:"You told Taylor you would send a project update by Wednesday. It is now Thursday. You missed the commitment and Taylor has not followed up.",
 task:"Own the missed commitment, explain the current position honestly and agree a credible next step.",
 steps:[
 {prompt:"What is the best first move?",options:[
 ["A","Wait to see whether Taylor notices","You leave Taylor to discover the missed commitment.",0],
 ["B","Send a proactive message acknowledging the missed update and giving the current position","You take responsibility before being chased.",3],
 ["C","Say you were busy and will send it when you can","You give no credible timeframe or useful status.",0],
 ["D","Send an update with incomplete figures so you can say you delivered","You risk trading accuracy for the appearance of follow-through.",0]]},
 {prompt:"Taylor asks why the update was late. What should you do?",options:[
 ["A","Blame another team without explaining what you did to manage the dependency","You deflect responsibility.",0],
 ["B","Briefly explain the reason, what you have done and what remains outstanding","You provide context while owning your part.",3],
 ["C","Give a long explanation of everything that happened this week","You may obscure the issue and next step.",1],
 ["D","Apologise repeatedly but avoid discussing the work","You acknowledge the miss but do not restore clarity.",0]]},
 {prompt:"What commitment should you make now?",options:[
 ["A","Promise it will be finished within an hour, even though you are unsure","You risk missing another commitment.",0],
 ["B","Give a realistic time for the next update, identify what it will contain and flag anything still outstanding","You make a credible, bounded commitment.",3],
 ["C","Say you will send it as soon as possible","This is too vague to rebuild confidence.",0],
 ["D","Ask Taylor to remind you tomorrow","You transfer responsibility for your follow-through.",0]]}
 ],
 practiceLabel:"Write your message to Taylor.",
 practicePrompt:"Acknowledge the missed commitment, explain the current position without making excuses, and set a realistic next update.",
 sample:"I committed to sending the project update yesterday and missed that deadline. I should have flagged the delay sooner. The current position is [brief status]; I'm still confirming [outstanding item]. I'll send you a verified update by [realistic time], including any remaining risks.",
 criteria:["Acknowledges the missed commitment","Takes responsibility without deflecting","Communicates the current situation honestly","Makes a realistic next commitment","Establishes clear follow-through"],
 takeawayTitle:"Commitment and follow-through tracker",takeawayPrompts:["What I committed to","Due date and time","What might affect delivery","When I will raise a risk","What I will confirm when I follow up"],
 outcomeGood:"Taylor has a clear account of the missed commitment and a realistic next update to expect.",
 outcomeMixed:"The missed commitment has been acknowledged, but trust may remain affected until the revised commitment is met. Follow through and raise any new risk early."
}
];